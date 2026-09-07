/* const { test } = require('@playwright/test');
const loginPage = require('./Pages/loginPage');

 */
import { test, expect } from '@playwright/test';
import { loginPage } from '../../Pages/loginPage';
test ('test', async ({page})=> {
    const login = new loginPage(page);
    //const login = new loginPage();
    await login.goToLoginPage();
    await login.login('ravali.d@ryzeup.co', 'Ch@12345');
    await page.waitForTimeout(5000);
});
