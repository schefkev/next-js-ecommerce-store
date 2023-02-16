import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await expect(page.getByRole('heading', { name: 'HOME' })).toBeVisible();
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');
  await page.getByTestId('product-4').click();
  await expect(page).toHaveURL('http://localhost:3000/products/4');
  await page.getByTestId('product-add-to-cart').click({ clickCount: 4 });
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');
  await page.getByTestId('cart-product-remove4').click({ clickCount: 2 });
  await page.getByTestId('cart-checkout').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page.getByTestId('checkout-first-name').fill('Peter');
  await page.getByTestId('checkout-last-name').fill('Horner');
  await page.getByTestId('checkout-email').fill('Peter.Horner@gmx.de');
  await page.getByTestId('checkout-address').fill('Peterstrasse');
  await page.getByTestId('checkout-city').fill('Wien');
  await page.getByTestId('checkout-postal-code').fill('1110');
  await page.getByTestId('checkout-country').fill('Austria');
  await page.getByTestId('checkout-credit-card').fill('1110111011101110');
  await page.getByTestId('checkout-expiration-date').fill('2024-02-02');
  await page.getByTestId('checkout-security-code').fill('111');
  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
});
