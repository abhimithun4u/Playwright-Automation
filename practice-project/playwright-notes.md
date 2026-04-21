📘 PLAYWRIGHT LOCATORS + ACTIONS (COMPLETE NOTES)
🧠 1. What is Locator?

👉 Locator = page er kono element ke identify korar way

📌 Example:

<input id="username" />

👉 Locator:

page.locator('#username')
🔥 2. TYPES OF LOCATORS (VERY IMPORTANT)

🟢 1. getByRole (BEST 🔥)


👉 User-facing locator

📌 HTML:
<button>Login</button>
✅ Code:
page.getByRole('button', { name: 'Login' })
💡 Common Roles:
Role	HTML
button	<button>
textbox	<input>
link	<a>
heading	<h1>
checkbox	<input type="checkbox">


🟢 2. getByText

👉 Direct text diye element dhore

📌 HTML:
<div>Welcome Abhishek</div>
✅ Code:
page.getByText('Welcome Abhishek')


🟢 3. getByLabel

👉 Label diye input dhore

📌 HTML:
<label>Username</label>
<input type="text">
✅ Code:
page.getByLabel('Username')


🟢 4. getByPlaceholder

👉 Placeholder diye

📌 HTML:
<input placeholder="Enter email">
✅ Code:
page.getByPlaceholder('Enter email')


🟢 5. CSS Locator

👉 Developer-based locator

🔹 By ID
<input id="username">
page.locator('#username')
🔹 By Class
<input class="input-field">
page.locator('.input-field')
🔹 By Attribute
<input name="email">
page.locator('[name="email"]')
🔹 Combination
page.locator('input[name="email"]')
⚠️ Locator Priority (Interview 🔥)
getByRole ✅
getByLabel ✅
getByText
CSS locator ❌ (last option)
🧠 3. ACTIONS (Element er sathe ki korbo)
✍️ 1. fill()
await page.getByRole('textbox').fill('Abhishek');

👉 Input field e value dey

⌨️ 2. type()
await page.getByRole('textbox').type('Abhishek');

👉 Human typing simulate kore

🖱️ 3. click()
await page.getByRole('button').click();
🔘 4. check (checkbox)
await page.getByRole('checkbox').check();
🔘 5. selectOption (dropdown)
await page.locator('#country').selectOption('India');
🧠 4. ASSERTIONS (Verification 🔥)
✅ 1. toBeVisible
await expect(page.getByText('Welcome')).toBeVisible();
✅ 2. toHaveText
await expect(page.locator('#msg')).toHaveText('Success');

👉 Exact match

✅ 3. toContainText
await expect(page.locator('#msg')).toContainText('Success');

👉 Partial match

✅ 4. toHaveTitle
await expect(page).toHaveTitle(/Google/);
✅ 5. toBeChecked
await expect(page.getByRole('checkbox')).toBeChecked();
🧠 5. FULL FLOW PATTERN (MOST IMPORTANT 🔥)

👉 Sob test ei structure thakbe:

test('Test name', async ({ page }) => {

  await page.goto('URL');       // open page

  await page.getByRole(...);    // action

  await expect(...);            // verify

});
🧠 6. REAL EXAMPLE (COMPLETE)
test('Login test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#flash')).toContainText('secure area');

});

/* page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTitle()
page.getByTestId() */