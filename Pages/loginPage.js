exports.loginPage =
class loginPage{
    constructor(page){
     this.page = page;
     this.username = '#temp_username';
     this.password = '#password';
     this.agreeTerms = '#acceptTerms';
     this.signin = '#kc-login';
    }
    async goToLoginPage(){
        await this.page.goto('https://sanity.leagues.ai/');
    }
    async login(username, password){
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.agreeTerms).check();
        await this.page.locator(this.signin).click();
    }
}   