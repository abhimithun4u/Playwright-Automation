/* //handling dropdown
import {test,expect} from '@playwright/test'
test('Automation using dropdown', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');
}) */

    //selecting checkboxes using nth
/* import {test,expect} from '@playwright/test'
test('Automation using checkbox', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkboxes = await page.locator('input[type="checkbox"]');
    await checkboxes.nth(0).check();
    await checkboxes.nth(1).uncheck();
    await expect(checkboxes.nth(0)).toBeChecked();
    await expect(checkboxes.nth(1)).not.toBeChecked();
}) */

/* // selecting checkboxes using first and last
import {test,expect} from '@playwright/test'
test('Automation using checkbox', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkboxes = page.locator('input[type="checkbox"]');
    await checkboxes.first().check();
    await checkboxes.last().uncheck();
    await expect(checkboxes.nth(5)).toBeChecked();
    await expect(checkboxes.nth(1)).not.toBeChecked();
}) */

// practicing radio button
import{test,expect} from '@playwright/test'
test('Automation of radio button', async ({page})=>{
    await page.goto('https://demoqa.com/radio-button');
    await page.getByLabel('Yes').check();
    await expect(page.getByLabel('Yes')).toBeChecked();
    await expect(page.getByText('You have selected Yes')).toBeVisible();
})