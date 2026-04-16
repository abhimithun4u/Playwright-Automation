/* import {test,expect} from '@playwright/test'
test("getBYRole Link Click", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link',{name:'Form Authentication'}).click();
    await expect(page.getByRole('heading',{name:'Login Page1'}),'Login page heading should be visible after navigation').toBeVisible();
}) */


/* import {test,expect} from '@playwright/test'
test("Click Link", async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link',{name:'Checkboxes'}).click();
      await expect(
        page.getByRole('heading', { name: 'Checkboxes' })
    ).toBeVisible();
}) */

/* import {test,expect} from '@playwright/test'
test('Dropdown Click', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:'Dropdown'}).click();
    await expect(page.getByRole('heading',{name:/Dropdown/})).toBeVisible();
}) */


/* import {test,expect} from '@playwright/test'
test('Fill Username', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link',{name:'Form Authentication'}).click();
    await page.getByLabel('Username').fill('tomsmith');
}) */

/* import {test,expect} from '@playwright/test'
test('Fill Username', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link',{name:'Form Authentication'}).click();
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.locator('#flash')).toContainText('invalid');
}) */

    import {test,expect} from '@playwright/test'
    test('User should login and logout successfully', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/');
        await page.getByRole('link',{name:'Form Authentication'}).click();
        await page.getByRole('textbox',{name:'Username'}).fill('tomsmith');
        await page.getByRole('textbox',{name:'Password'}).fill('SuperSecretPassword!');
        await page.getByRole('button',{name:'Login'}).click();
        await expect(page.locator('#flash')).toContainText(/secure area/);
        await page.getByRole('link',{name:'Logout'}).click();
        await expect(page.locator('#flash')).toContainText(/You logged out/);
    })