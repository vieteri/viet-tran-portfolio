import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { mkdir, writeFile } from 'node:fs/promises';

// Failure-only diagnostic. Changes trial styles in the disposable test browser,
// never in the application. Preserves the original regression test's failure.
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1'], { stdio: 'inherit' });
let browser;
try {
  for (let i = 0; i < 30; i++) {
    try { if ((await fetch('http://127.0.0.1:3000')).ok) break; } catch { /* Starting. */ }
    await delay(500);
  }
  browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const report = [];
  for (const route of ['/contact', '/consulting']) {
    await page.goto(`http://127.0.0.1:3000${route}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.setViewportSize({ width: 320, height: 1000 });
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const baseline = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      viewport: innerWidth,
      elements: [...document.querySelectorAll('body *')].filter(element => {
        const r = element.getBoundingClientRect();
        return r.width > 0 && (r.right > innerWidth + 1 || element.scrollWidth > element.clientWidth + 2);
      }).map(element => {
        const rect = element.getBoundingClientRect();
        const css = getComputedStyle(element);
        return { tag: element.tagName, className: element.getAttribute('class'), text: element.textContent?.slice(0, 100), right: rect.right, width: rect.width, scrollWidth: element.scrollWidth, clientWidth: element.clientWidth, display: css.display, position: css.position, overflow: css.overflow, whiteSpace: css.whiteSpace, gridTemplateColumns: css.gridTemplateColumns, fontSize: css.fontSize, fontFamily: css.fontFamily };
      }).slice(0, 35),
    }));
    const trials = [];
    for (const css of [
      '.contact-page { display: block !important; }',
      '.contact-address { max-width: 100%; font-size: 2rem !important; }',
      'h1,h2,h3,p,a { overflow-wrap: anywhere !important; white-space: normal !important; }',
      '.shell * { min-width: 0 !important; }',
      'body { display: block !important; }',
      '.site-header { position: static !important; }',
      '.site-footer { display: none !important; }',
    ]) {
      const style = await page.addStyleTag({ content: css });
      const width = await page.evaluate(() => document.documentElement.scrollWidth);
      trials.push({ css, width });
      await style.evaluate(element => element.remove());
    }
    report.push({ route, baseline, trials });
  }
  await mkdir('test-results/portfolio', { recursive: true });
  await writeFile('test-results/portfolio/layout-diagnosis.json', JSON.stringify(report, null, 2));
  console.log('LAYOUT_DIAGNOSIS', JSON.stringify(report));
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}
