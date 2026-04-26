/* //handling dropdown always remember in select option value is picked verification is always toHaveValue
import {test,expect} from '@playwright/test'
test('Automation using dropdown', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');
}) */

/* import {test,expect} from '@playwright/test'
test('dropdown practice', async ({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');

    await page.locator('.form-control').selectOption('10');
    await expect(page.locator('.form-control')).toHaveValue('10');

    await page.locator('#country').selectOption('IN');
    await expect(page.locator('#country')).toHaveValue('IN');
}) */

import {test,expect} from '@playwright/test'
test('Dropdown revision', async ({page})=>{
    await page.goto('https://demoqa.com/select-menu');
    await page.locator('#withOptGroup').click();
    await page.getByText('Group 1, option 1').click();
    await expect(page.getByText('Group 1, option 1', { exact: true })).toBeVisible();

    await page.locator('#selectOne').click();
    await page.getByText('Mr.').click();
    await expect(page.locator('#selectOne')).toContainText('Mr.');

    await page.locator('#oldSelectMenu').selectOption('4');
    await expect(page.locator('#oldSelectMenu')).toHaveValue('4')

    await page.locator('#react-select-4-input').click();
    await page.locator('[id^="react-select-4-option"]').filter({ hasText: 'Blue' }).click();

    await page.locator('#react-select-4-input').click();
    await page.locator('[id^="react-select-4-option"]').filter({ hasText: 'Green' }).click();

    await page.locator('#cars').selectOption('volvo','audi');
    await expect(page.locator('#cars')).toHaveValues('volvo','audi');
})





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

/* // practicing radio button
import{test,expect} from '@playwright/test'
test('Automation of radio button', async ({page})=>{
    await page.goto('https://demoqa.com/radio-button');
    await page.getByLabel('Yes').check();
    await expect(page.getByLabel('Yes')).toBeChecked();
    await expect(page.getByText('You have selected Yes')).toBeVisible();
}) */