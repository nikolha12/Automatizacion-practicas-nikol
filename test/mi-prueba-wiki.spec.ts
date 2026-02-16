import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';


test('Login HP', {tag:'@regression'}, async ({ page }) => {
  const loginPage = new LoginPage (page)
  const inventoryPage = new InventoryPage(page)
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user','secret_sauce')
  await inventoryPage.validar_products()

});

test('Login repetido', {tag: '@smoke'}, async ({ page }) => {
  const loginPage = new LoginPage (page)
  const inventoryPage = new InventoryPage(page)
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user','secret_sauce')
  await inventoryPage.validar_products()

});
