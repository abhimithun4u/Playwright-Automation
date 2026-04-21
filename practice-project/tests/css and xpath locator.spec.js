import {test,expect} from '@playwright/test'
test('practice of css and xpath selector', async ({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('#firstName').fill('Abhishek'); // css locator
    await page.locator("//input[@id='lastName']").fill('Mukherjee'); // xpath
})