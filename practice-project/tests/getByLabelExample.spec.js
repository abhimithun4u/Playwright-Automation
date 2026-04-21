import {test,expect} from '@playwright/test'
test('Fill username and wrong password using label and click login to check validation', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword');
    await page.getByRole('button', {name:'Login'}).click();
    await expect(page.getByText('Your password is invalid!')).toBeVisible();
})