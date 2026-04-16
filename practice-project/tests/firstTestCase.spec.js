/* import { test, expect } from '@playwright/test'
test('Application Launch', async({page})=>{
    await page.goto('https://www.google.com')
      await page.fill('textarea[name="q"]', 'Playwright');
      await page.keyboard.press('Enter');
      await expect(page).toHaveTitle(/Playwright/);
      }) */

import { test,expect } from'@playwright/test'
test('Search Google', async({page})=>{
    await page.goto('https://iflow.digisherpa.ai');
    await page.locator('SelectorsHub').fill('Playwright');
    await page.keyboard.press('Enter');
    await expect(page).toHaveTitle(/Playwright/);
})