/* import{test,expect} from '@playwright/test'
test('First iFrame Test', async({page})=>{
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_test');
    const frame = page.frameLocator('#iframeResult');
    await frame.locator('#fname').fill('Abhishek');
    await frame.locator('lname').fill('Mukherjee');
    await frame.getByRole('button',{name:'Submit'}).click();
    await expect(frame.getByRole('heading',{name:'Submitted Form Data'})).toHaveText('Submitted Form Data')
}) */

/* import{test,expect} from '@playwright/test'
test('First iFrame Test', async({page})=>{
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_test');
    const frame = page.frameLocator('#iframeResult');
    await frame.locator('#fname').fill('Abhishek');
    await frame.getByRole('button',{name:'Submit'}).click();
   await expect(frame.locator('body')).toContainText('Abhishek');
   await expect(frame.locator('body')).not.toContainText('Mukherjee');
}) */

/* import{test,expect} from '@playwright/test'
test('First iFrame Test', async({page})=>{
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_test');
    const frame = page.frameLocator('#iframeResult');
    await frame.getByRole('button',{name:'Submit'}).click();
   await expect(frame.locator('body')).not.toContainText('Abhishek');
   await expect(frame.locator('body')).not.toContainText('Mukherjee');
}) */

/* import { test, expect } from '@playwright/test';

test('Type inside iframe editor', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/iframe');

  const frame = page.frameLocator('iframe[title="Rich Text Area"]');

  const textBox = frame.locator('body');

  await textBox.fill('Hello Playwright');

  await expect(textBox).toContainText('Hello Playwright');

}); */

/* //https://practice-automation.com/iframes/
import {test,expect} from '@playwright/test';
test('Practicing iFrame', async ({page}) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_test');
    const frame = page.frameLocator('#iframeResult');
    await frame.locator('#fname').fill('Abhishek');
    await frame.locator('#lname').fill('Mukherjee');
    await frame.getByRole('button',{name:'Submit'}).click();
    await expect(frame.getByRole('heading',{level:1})).toContainText('Submitted Form Data');
}) */

/* // Program to locate iframe and verify its content
import{test,expect} from '@playwright/test';
test('iFrame Locatge and Verify', async ({page})=>{
    await page.goto('https://demoqa.com/frames');
    const frame1 = page.frameLocator('#frame1');
    await expect(frame1.getByRole('heading',{level:1})).toHaveText('This is a sample page');

    const frame2 = page.frameLocator('#frame2');
    await expect(frame2.locator('#sampleHeading')).toContainText('This is a sample page');
}) */


/* // Program to count no of iframes present in a page and 
// using loop find and print its id, src, height and width
import{test,expect} from '@playwright/test';
test('iFrame Count and get Properties', async ({page})=>{
await page.goto('https://demoqa.com/frames');
const iframe = page.locator('iframe');
const count = await iframe.count();
console.log("Total iFrames Available:- " +count);
await expect(iframe).toHaveCount(2);

for(let i=0;i<count;i++)
{
    const id = await iframe.nth(i).getAttribute('id');
    const src = await iframe.nth(i).getAttribute('src');
    const height = await iframe.nth(i).getAttribute('height');
    const width = await iframe.nth(i).getAttribute('width');

    console.log(`iframe[${i}]:`);
    console.log(`Id = ${id}`);
    console.log(`Src = ${src}`);
    console.log(`Height= ${height}`);
    console.log(`Width = ${width}`);
}
}) */

/* // Program to catch two iframes seperately and compaire their text
import {test,expect} from '@playwright/test';
test('Handling Multiple iFrames', async ({page}) => {
    await page.goto('https://demoqa.com/frames');
    const frame1 = page.frameLocator('#frame1');
    const text1 = await frame1.getByRole('heading',{level:1}).innerText();
    console.log(text1);
    const frame2 = page.frameLocator('iframe').nth(1);
    const text2 = await frame2.locator('#sampleHeading').innerText();
    console.log(text2);
    expect(text1).toBe(text2);
}) */


// Program to practice nested iFrames and extract text from each iframe and compare them 
import{test,expect} from '@playwright/test';
test('Handling Nested iFrames', async ({page}) =>{
    await page.goto('https://demoqa.com/nestedframes');
    const outerFrame = page.frameLocator('#frame1');
    const outerText = await outerFrame.locator('body').innerText();
    console.log(outerText);
    const innerFrame = outerFrame.frameLocator('iframe');
    const innerText = await innerFrame.locator('body').innerText();
    console.log(innerText);

    await expect(outerFrame.locator('body')).toContainText('Parent frame');
    await expect(innerFrame.locator('body')).toContainText('Child Iframe');
})