import { test, expect } from '@playwright/test';
import { loginPage } from '../../Pages/User/loginPage';
import { wallPage } from '../../Pages/User/wallPage';


test ('test', async ({page})=> {
     page.on('request', request => {
        if (request.url().includes('login-actions/authenticate')) {
            console.log('========== AUTH REQUEST ==========');
            console.log('URL:', request.url());
            console.log('Method:', request.method());
            console.log('Post Data:', request.postData());
        }
    });

    page.on('response', async response => {
        if (response.url().includes('login-actions/authenticate')) {
            console.log('========== AUTH RESPONSE ==========');
            console.log('Status:', response.status());
            console.log('URL:', response.url());
        }
    });
    const login = new loginPage(page);
    //const login = new loginPage();
        await login.goToLoginPage();
        await login.login('srinivasaraju.i@ryzeup.co','Ch@12345');
        //await page.waitForTimeout(5000);
        await expect(page).toHaveURL('https://orgs1.sit.leagues.ai/wall');
        await page.waitForTimeout(5000);
        const wall = new wallPage(page);
        await wall.verifyWallPageDisplayed();
        await wall.verifyTabSwitching();
        await page.waitForTimeout(5000);


});
