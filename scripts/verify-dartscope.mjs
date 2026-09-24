import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from '@playwright/test';

const media = JSON.parse(await readFile('src/data/dartscopeMedia.json', 'utf8'));
const sources = JSON.parse(await readFile('public/work/sources.json', 'utf8'));
const baseURL = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:3000';
const output = 'test-results/portfolio';
const results = [];
const record = (message) => { results.push(message); console.log(message); };
await mkdir(output, { recursive: true });
assert.equal(media.version, '1.0.6');
assert.equal(media.screenshots.length, 6);
assert.equal(new Set(media.screenshots.map(({ src }) => src)).size, 6);
for (const screenshot of media.screenshots) {
  assert.match(screenshot.src, /^\/work\/dartscope-1\.0\.6-[a-z]+\.webp$/);
  const bytes = await readFile(`public${screenshot.src}`);
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  assert(bytes.length > 1000 && bytes.length < 5000000);
  const source = sources.find(({ file }) => file === screenshot.src.split('/').at(-1));
  assert(source, `Missing provenance for ${screenshot.src}`);
  assert.equal(source.source, screenshot.source);
  assert.equal(source.appVersion, media.version);
  assert.equal(source.width, screenshot.width);
  assert.equal(source.height, screenshot.height);
  assert.equal(new URL(source.source).hostname, 'is1-ssl.mzstatic.com');
}
record('Six distinct local WebP files match the reviewed App Store release and provenance');

const server = process.env.PORTFOLIO_BASE_URL ? null : spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1'], { stdio: 'inherit' });
let browser;
let page;
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(baseURL, { signal: AbortSignal.timeout(5000) });
      if (response.ok) { ready = true; break; }
    } catch { /* Wait for the local production server. */ }
    if (server?.exitCode !== null && server?.exitCode !== undefined) throw new Error('Production server exited before becoming ready');
    await delay(1000);
  }
  assert(ready, 'Production server must be reachable');
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const go = async (route) => {
    const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
    assert.equal(response?.status(), 200, route);
    await page.evaluate(() => document.fonts.ready);
  };
  const decodeImages = async () => {
    await page.locator('main img').evaluateAll(async (images) => {
      images.forEach((image) => { image.loading = 'eager'; });
      await Promise.all(images.map((image) => image.decode()));
    });
  };
  for (const route of ['/', '/projects', '/consulting']) {
    await go(route);
    await decodeImages();
    const images = await page.locator('main img').evaluateAll((items) => items.map((image) => ({
      alt: image.alt,
      source: new URL(image.currentSrc).searchParams.get('url') || new URL(image.currentSrc).pathname,
    })));
    assert(images.some(({ source }) => source.includes('dartscope-1.0.6-discover.webp')), `New DartScope preview on ${route}`);
    assert(!images.some(({ source }) => /dartscope-[12]\.webp/.test(source)), `No obsolete images on ${route}`);
    if (route !== '/consulting') assert(images.some(({ source }) => source.includes('dartscope-1.0.6-score.webp')), `Scoring preview on ${route}`);
    if (route === '/') {
      const hero = page.locator('.hero-darts img');
      assert.equal(await hero.getAttribute('alt'), media.screenshots[0].alt);
      assert.equal(await hero.getAttribute('width'), String(media.screenshots[0].width));
    }
    record(`Updated DartScope images load on ${route}`);
  }
  for (const route of ['/', '/projects']) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await go(route);
      const card = page.locator('.work-entry--dartscope');
      const details = card.getByRole('link', { name: 'View screenshots', exact: true });
      assert(await details.isVisible(), `Gallery link is visible on ${route} at ${width}px`);
      assert.equal(await details.getAttribute('href'), '/projects/dartscope');
      assert.equal(await details.getAttribute('target'), null, 'Gallery navigation stays in the same tab');
      const appStore = card.getByRole('link', { name: 'View on App Store', exact: true });
      assert.equal(await appStore.getAttribute('href'), 'https://apps.apple.com/us/app/dartscope/id6760133199');
      assert.equal(await appStore.getAttribute('target'), '_blank', 'Keep the separate App Store action');
      await details.click();
      await page.waitForURL('**/projects/dartscope');
      assert.equal(await page.locator('[data-dartscope-gallery] img').count(), 6);
      record(`Visitors can open the six-image gallery from ${route} at ${width}px`);
    }
  }
  await go('/projects/dartscope');
  assert.equal(await page.locator('h1').innerText(), 'DartScope');
  const gallery = page.locator('[data-dartscope-gallery]');
  assert.equal(await gallery.getAttribute('data-release'), media.version);
  assert.equal(await gallery.locator('figure').count(), 6);
  assert.equal(await gallery.locator('img').count(), 6);
  assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute('href')).pathname, '/projects/dartscope');
  assert.match(await page.locator('meta[name="description"]').getAttribute('content'), /Quick Match/);
  for (const screenshot of media.screenshots) {
    assert.equal(await gallery.getByAltText(screenshot.alt, { exact: true }).count(), 1);
    const link = gallery.locator(`a[href="${screenshot.src}"]`);
    assert.match(await link.getAttribute('aria-label'), /full-size screenshot in a new tab/);
    assert.equal(await link.getAttribute('target'), '_blank');
    assert.match(await link.getAttribute('rel'), /noopener/);
    assert((await gallery.locator('figcaption').allTextContents()).includes(screenshot.caption));
    const response = await page.request.get(`${baseURL}${screenshot.src}`);
    assert.equal(response.status(), 200, screenshot.src);
    assert.match(response.headers()['content-type'], /image\/webp/);
  }
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: width < 480 ? 844 : 1000 });
    await decodeImages();
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const dimensions = await page.evaluate(() => ({ viewport: innerWidth, content: document.documentElement.scrollWidth }));
    assert(dimensions.content <= dimensions.viewport + 1, `DartScope overflow at ${width}px`);
    const imageSizes = await gallery.locator('img').evaluateAll((images) => images.map((image) => {
      const box = image.getBoundingClientRect();
      return { ratio: box.width / box.height, naturalRatio: image.naturalWidth / image.naturalHeight };
    }));
    for (const size of imageSizes) assert(Math.abs(size.ratio - size.naturalRatio) < 0.01, 'Screenshots retain their aspect ratio');
    await page.screenshot({ path: `${output}/dartscope-${width}.png`, fullPage: true });
    record(`DartScope gallery: all images decoded, uncropped, no overflow at ${width}px`);
  }
  const firstLink = gallery.locator(`a[href="${media.screenshots[0].src}"]`);
  await firstLink.focus();
  assert(await firstLink.evaluate((element) => element === document.activeElement));
  const popupPromise = page.waitForEvent('popup');
  await page.keyboard.press('Enter');
  const popup = await popupPromise;
  await popup.waitForLoadState('load');
  assert.equal(new URL(popup.url()).pathname, media.screenshots[0].src);
  await popup.close();
  record('Full-size screenshot opens from the keyboard in a separate tab');
  assert.deepEqual(errors, [], 'No uncaught browser errors');
} catch (error) {
  await page?.screenshot({ path: `${output}/dartscope-failure.png`, fullPage: true }).catch(() => {});
  throw error;
} finally {
  await writeFile(`${output}/dartscope-verification.json`, JSON.stringify({ version: media.version, checkedAt: new Date().toISOString(), baseURL, results }, null, 2));
  await browser?.close();
  server?.kill('SIGTERM');
}
