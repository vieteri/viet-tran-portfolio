import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from '@playwright/test';

// Uses an already-built production app. An optional URL can test a public preview.
// This script never changes Vercel settings or bypasses deployment protection.
const baseURL = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:3000';
const output = 'test-results/portfolio';
await mkdir(output, { recursive: true });
const server = process.env.PORTFOLIO_BASE_URL ? null : spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1'], { stdio: 'inherit' });
let browser;
const results = [];
try {
  let ready = false;
  for (let attempt = 0; attempt < 90; attempt++) {
    try {
      const response = await fetch(baseURL, { signal: AbortSignal.timeout(5000) });
      if (response.ok) { ready = true; break; }
    } catch { /* Wait for the local server to start. */ }
    if (server?.exitCode !== null && server?.exitCode !== undefined) throw new Error('Production server exited before becoming ready');
    await delay(1000);
  }
  assert(ready, 'The production site must be reachable');
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  const go = async (route, expected = 200) => {
    const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
    assert.equal(response?.status(), expected, route);
    await page.evaluate(() => document.fonts.ready);
    return response;
  };
  const noOverflow = async (route, width) => {
    const dimensions = await page.evaluate(() => ({ viewport: innerWidth, width: document.documentElement.scrollWidth }));
    assert(dimensions.width <= dimensions.viewport + 1, `Horizontal overflow at ${route}, ${width}px: ${JSON.stringify(dimensions)}`);
  };
  const references = [
    ['TM Beauty', 'https://tmbeauty.fi/'],
    ['KovaFit', 'https://apps.apple.com/us/app/kovafit/id6758958067'],
    ['DartScope', 'https://apps.apple.com/us/app/dartscope/id6760133199'],
  ];
  for (const route of ['/', '/consulting', '/projects', '/about/cv', '/about', '/contact']) {
    await go(route);
    assert.equal(await page.locator('main').count(), 1, `Exactly one main landmark: ${route}`);
    assert.equal(await page.locator('h1').count(), 1, `Exactly one primary heading: ${route}`);
    if (route === '/' || route === '/consulting' || route === '/about/cv') {
      assert.match(await page.locator('main').innerText(), /100\+ client integrations/);
      for (const [name, href] of references) {
        assert((await page.locator('main').innerText()).includes(name), `${name} on ${route}`);
        assert(await page.locator(`main a[href="${href}"]`).count() > 0, `${name} link on ${route}`);
      }
    }
    if (['/', '/consulting', '/projects', '/about/cv'].includes(route)) {
      const expectedCanonical = new URL(route, 'https://viet.fi').href;
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), expectedCanonical);
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        await noOverflow(route, width);
      }
      await page.screenshot({ path: `${output}/${route === '/' ? 'home' : route.replaceAll('/', '-')}-desktop.png`, fullPage: true });
      await page.setViewportSize({ width: 390, height: 844 });
      await page.screenshot({ path: `${output}/${route === '/' ? 'home' : route.replaceAll('/', '-')}-mobile.png`, fullPage: true });
      await page.setViewportSize({ width: 1440, height: 1000 });
    }
    results.push(`Route and content OK: ${route}`);
  }
  await go('/');
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Consulting', exact: true }).filter({ visible: true }).click();
  await page.waitForURL('**/consulting');
  results.push('Desktop Consulting navigation works from home');
  await page.setViewportSize({ width: 390, height: 844 });
  await go('/');
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await page.locator('#mobile-navigation').getByRole('link', { name: 'CV', exact: true }).click();
  await page.waitForURL('**/about/cv');
  assert.equal(await page.getByRole('button', { name: 'Open menu', exact: true }).getAttribute('aria-expanded'), 'false');
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('button', { name: 'Open menu', exact: true }).getAttribute('aria-expanded'), 'false');
  results.push('Mobile CV navigation, menu closing and Escape work');
  for (const slug of ['tm-beauty', 'kovafit', 'dartscope', 'telegram-gemini-chatbot', 'ai-fitness-coach', 'XML-transform-tool', 'tower-defence-game', 'deno-app', 'old-portfolio-page']) {
    await go(`/projects/${slug}`);
    assert.equal(await page.locator('h1').count(), 1);
  }
  await go('/projects/not-a-real-project', 404);
  await go('/cv');
  assert.equal(new URL(page.url()).pathname, '/about/cv');
  results.push('All nine project pages, real 404 and CV alias work');
  // The CV must be one page at both desktop and mobile viewport sizes.
  // Print CSS must not clip content or scale an oversized page to fit.
  await go('/about/cv');
  await page.emulateMedia({ media: 'print' });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false, path: `${output}/viet-tran-cv-${width}.pdf` });
    const count = (pdf.toString('latin1').match(/\/Type\s*\/Page\b/g) || []).length;
    assert.equal(count, 1, `CV must have exactly one PDF page at ${width}px`);
    const printInfo = await page.locator('#printable-cv').evaluate((element) => ({ overflow: getComputedStyle(element).overflow, fontSize: parseFloat(getComputedStyle(element).fontSize) }));
    assert.equal(printInfo.overflow, 'visible', 'Do not hide overflow to fake one-page output');
    assert(printInfo.fontSize >= 14, 'CV body type must remain at least 10.5pt');
    results.push(`A4 PDF at ${width}px viewport: exactly one page`);
  }
  await page.emulateMedia({ media: 'screen' });
  await page.evaluate(() => { window.__printCalled = false; window.print = () => { window.__printCalled = true; }; });
  await page.getByRole('button', { name: 'Print / save PDF', exact: true }).click();
  await page.waitForFunction(() => window.__printCalled === true);
  assert.equal(await page.locator('a[href*="viettran.dev"]').count(), 0);
  assert.deepEqual(pageErrors, [], 'No uncaught browser errors');
  results.push('Print control works; no uncaught browser errors');
  await writeFile(`${output}/verification.json`, JSON.stringify({ baseURL, checkedAt: new Date().toISOString(), results }, null, 2));
  console.log(results.join('\n'));
} finally {
  await browser?.close();
  server?.kill('SIGTERM');
}
