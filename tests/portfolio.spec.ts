import { test, expect } from '@playwright/test';

test.describe('Portfolio Single Page Navigation', () => {
  test('should load the homepage and navigate to sections', async ({ page }) => {
    // 1. Open the homepage
    console.log('Navigating to homepage...');
    await page.goto('/');

    // 2. Check for Hero Section (Immediate visual confirmation)
    await expect(page.locator('h1')).toContainText('Viet Tran');
    console.log('Hero section confirmed.');

    // 3. Verify Single Page Sections exist (Experience, Projects, etc.)
    // We expect these IDs to be present on the page now
    const sections = ['about', 'experience', 'projects', 'contact'];
    
    for (const section of sections) {
      const element = page.locator(`#${section}`);
      await expect(element).toBeVisible();
      console.log(`Section #${section} is visible.`);
    }

    // 4. Test Navigation Links (Scrolling)
    // Click "Projects" and verify we scrolled
    console.log('Testing "Projects" navigation...');
    await page.getByRole('link', { name: 'Projects' }).click();
    
    // Allow a moment for smooth scroll
    await page.waitForTimeout(1000);
    
    // Verify the URL hash changed or we are near the element
    // Note: checking scroll position is tricky, but URL hash is a good proxy if implemented
    // Or we can check if the element is in the viewport
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeInViewport();
    console.log('Successfully navigated to Projects section.');
  });

  test('should display console logs from browser', async ({ page }) => {
    // Listen for console logs
    page.on('console', msg => console.log(`BROWSER LOG: ${msg.text()}`));
    await page.goto('/');
  });
});