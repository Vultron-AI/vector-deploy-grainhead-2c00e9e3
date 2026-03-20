import { test, expect } from '@playwright/test'

test.describe('Grain Headwear Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('page loads and shows navbar with logo', async ({ page }) => {
    const navbar = page.getByTestId('nav.bar')
    await expect(navbar).toBeVisible()

    const logo = page.getByTestId('nav.logo')
    await expect(logo).toBeVisible()

    const logoImg = logo.locator('img')
    await expect(logoImg).toHaveAttribute('src', '/logo.svg')
  })

  test('hero section is visible with CTA button', async ({ page }) => {
    const hero = page.getByTestId('hero.section')
    await expect(hero).toBeVisible()

    const cta = page.getByTestId('hero.cta')
    await expect(cta).toBeVisible()
    await expect(cta).toHaveText(/Shop Now/i)
  })

  test('product grid displays 4+ product cards with names and prices', async ({ page }) => {
    const grid = page.getByTestId('products.grid')
    await expect(grid).toBeVisible()

    const cards = page.getByTestId('products.card')
    await expect(cards).toHaveCount(4)

    // Verify each card has a name and price
    const names = page.getByTestId('products.card.name')
    await expect(names).toHaveCount(4)

    const prices = page.getByTestId('products.card.price')
    await expect(prices).toHaveCount(4)

    // Verify specific product names
    await expect(names.nth(0)).toHaveText('Classic Cap')
    await expect(names.nth(1)).toHaveText('Bucket Hat')
    await expect(names.nth(2)).toHaveText('Snapback')
    await expect(names.nth(3)).toHaveText('Beanie')

    // Verify prices contain $ sign
    for (let i = 0; i < 4; i++) {
      await expect(prices.nth(i)).toContainText('$')
    }
  })

  test('footer is visible', async ({ page }) => {
    const footer = page.getByTestId('footer')
    await expect(footer).toBeVisible()

    await expect(footer).toContainText('2026 Grain Headwear')
  })

  test('mobile viewport shows hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const menuToggle = page.getByTestId('nav.menu-toggle')
    await expect(menuToggle).toBeVisible()

    // Click hamburger to open mobile menu
    await menuToggle.click()

    // Verify menu links are visible within the navbar
    const navbar = page.getByTestId('nav.bar')
    await expect(navbar.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(navbar.getByRole('link', { name: 'Products', exact: true })).toBeVisible()
    await expect(navbar.getByRole('link', { name: 'About', exact: true })).toBeVisible()
  })
})
