// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // 📂 Test files kothay ache
  testDir: './tests',

  // ⚡ Parallel execution (multiple test ek sathe run)
  fullyParallel: true,

  // ❌ CI te jodi test.only thake tahole fail korbe
  forbidOnly: !!process.env.CI,

  // 🔁 Retry (CI te 2 bar retry, local e 0)
  retries: process.env.CI ? 2 : 0,

  // 🧵 Worker (CI te ekta worker, local e default)
  workers: process.env.CI ? 1 : undefined,

  // ⏱️ Full test timeout (1 min)
  timeout: 60000,

  // ⏱️ Expect (assertion) timeout
  expect: {
    timeout: 10000,
  },

  // 📊 Report generate (HTML report best)
  reporter: 'html',

  // 🌐 Global test settings (MOST IMPORTANT 🔥)
  use: {

    // 🌍 Base URL (short URL use korte parbe)
    //baseURL: 'https://the-internet.herokuapp.com',

    // 👀 Browser visible (debugging er jonno helpful)
    headless: false,

    // 📸 Screenshot only on failure
    screenshot: 'only-on-failure',

    // 🎥 Video record (fail hole save)
    video: 'retain-on-failure',

    // 🧠 Trace (debugging er jonno full steps record)
    trace: 'on-first-retry',

    // ⏳ Action timeout (optional)
    actionTimeout: 15000,
  },

  // 🌍 Multiple browser support
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // 👉 Beginner hole sudhu chromium rakhte paro
    // niche gula optional

  /*   {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    }, */
  ],

});