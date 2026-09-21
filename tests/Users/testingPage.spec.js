import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

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
    await page.goto('https://sanity.leagues.ai/');

    await page.getByRole('textbox', {
        name: 'Enter Username or Email'
    }).fill('indukuris2@gmail.com');

    await page.getByRole('textbox', {
        name: 'Password'
    }).fill('Ch@12345');

    await page.getByRole('checkbox', {
        name: 'I agree to the Terms and Conditions'
    }).check();

    await page.getByRole('button', {
        name: 'sign-in'
    }).click();

    await expect(page).toHaveURL(
        'https://sanity.leagues.ai/wall'
    );
});