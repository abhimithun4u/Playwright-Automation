// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // ⏱️ Office app slow hole eta baro
  timeout: 90000,
  expect: {
    timeout: 15000,
  },

  // 📊 Double reporter — terminal + HTML duto
  reporter: [
    ['html'],
    ['list']
  ],

  // 📁 Failure screenshots/videos ekhane jambe
  outputDir: './test-results',

  use: {
    // 🌍 Office app er URL ekhane dao
    //baseURL: 'https://your-office-app.com',

    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    size: { width: 1920, height: 1080 },
    trace: 'on-first-retry',
    actionTimeout: 20000,

    // 🔐 Login session reuse
    //storageState: 'auth.json',

    launchOptions: {
      args: ['--disable-gpu']
    }
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

});