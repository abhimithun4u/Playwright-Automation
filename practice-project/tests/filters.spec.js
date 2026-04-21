/* import {test,expect} from '@playwright/test'
test('login and selecting items using different type of filters', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs');
}) */

/* SET 1 — hasText
👉 Task:
👉 “Bike Light” add to cart */

//hasText example
/* import {test,expect} from '@playwright/test'
test('filter by text', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await page.locator('.inventory_item')
    .filter({hasText:'Sauce Labs Bike Light'})
    .getByRole('button').click();
}) */

/*     //has example
    import {test,expect} from '@playwright/test'
    test('filter by has', async ({page})=>{
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.getByRole('button',{name:'Login'}).click();
        await page.locator('.inventory_item')
        .filter({has: page.getByText('Sauce Labs Backpack')})
        .getByRole('button')
        .click();
    }) */

/*     //nth example
     import {test,expect} from '@playwright/test'
    test('filter by has', async ({page})=>{
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.getByRole('button',{name:'Login'}).click();
        await page.locator('.inventory_item').nth(0).getByRole('button').click();
        }) */

    // first and last example
       import {test,expect} from '@playwright/test'
        test('filter by has', async ({page})=>{
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.getByRole('button',{name:'Login'}).click();
        await page.locator('.inventory_item').first().getByRole('button').click();
        await page.locator('.inventory_item').last().getByRole('button').click();
        })