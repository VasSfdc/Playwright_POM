//import { expect } from '@playwright/test';

export class loginPage {
    constructor(page) {
        this.page = page;

        this.username = '#username';
        this.password = '#password';
        this.agreeTerms = '#acceptTerms';
        this.signin = '#kc-login';
    }

    async goToLoginPage() {
        await this.page.goto('https://orgs1.sit.leagues.ai/');
    }

    async login(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.agreeTerms).check();

    //await this.page.pause();

    await this.page.locator(this.signin).click();
}
    /* async verifyDashboard() {
        await expect(this.page).toHaveURL(
            'https://orgs1.sit.leagues.ai/wall'
        );
    } */
}