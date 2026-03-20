/**
 * E2E Tests - Grain Headwear Landing Page
 *
 * These tests capture screenshots for visual validation.
 */

import { test, expect } from '@playwright/test'
import { mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// DO NOT CHANGE THESE NAMES
const MAIN_PAGE_SCREENSHOT_NAME = 'MainPage'
const LANDING_PAGE_SCREENSHOT_NAME = 'LandingPage'

// Ensure screenshots directory exists (ESM-compatible)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const screenshotsDir = join(__dirname, '..', 'screenshots')
if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true })
}

test.describe('App E2E Tests', () => {
  test('captures LandingPage screenshot', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.getByTestId('app.root')).toBeVisible()
    await expect(page.getByTestId('nav.bar')).toBeVisible()
    await expect(page.getByTestId('hero.section')).toBeVisible()

    await page.screenshot({
      path: join(screenshotsDir, LANDING_PAGE_SCREENSHOT_NAME + '.png'),
      fullPage: true,
    })

    await expect(page).toHaveTitle(/Grain Headwear/)
  })

  test('captures MainPage screenshot', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.getByTestId('app.root')).toBeVisible()
    await expect(page.getByTestId('products.grid')).toBeVisible()
    await expect(page.getByTestId('footer')).toBeVisible()

    await page.screenshot({
      path: join(screenshotsDir, MAIN_PAGE_SCREENSHOT_NAME + '.png'),
      fullPage: true,
    })

    await expect(page).toHaveTitle(/Grain Headwear/)
  })
})
