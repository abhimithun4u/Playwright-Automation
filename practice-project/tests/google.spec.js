import { test, expect } from '@playwright/test';

test('Google search Playwright', async ({ page }) => {

  // 1. Google open
  await page.goto('https://www.google.com');

  // 2. Search box e type
  await page.fill('textarea[name="q"]', 'Playwright download');

  // 3. Enter press
  await page.keyboard.press('Enter');

  // 4. Wait for results
  await page.waitForTimeout(2000);

});