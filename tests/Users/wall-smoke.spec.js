import { test, expect } from '@playwright/test';
import { loginPage } from '../../Pages/User/loginPage';
import { wallPage } from '../../Pages/User/wallPage';


test.beforeEach(async ({ page }) => {

    const login = new loginPage(page);

    await login.goToLoginPage();

    await login.login(
        'srinivasaraju.i@ryzeup.co',
        'Ch@12345'
    );

    await expect(page).toHaveURL(
        'https://orgs1.sit.leagues.ai/wall'
    );
});
test.afterEach(async ({ page }, testInfo) => {

    const fileName = testInfo.title.replace(
        /[^a-zA-Z0-9-_]/g,
        '_'
    );

    await page.screenshot({
        path: `screenshots/${fileName}.png`,
        fullPage: true
    });
});



test('WALL-001 - Verify Wall page opens after login', async ({ page }) => {

    const wall = new wallPage(page);

    await wall.verifyWallPageDisplayed();
});


/* test('WALL-002 - Verify Wall is displayed after successful login', async ({ page }) => {

    const wall = new wallPage(page);

    await wall.verifyWallPageDisplayed();
});
 */

test('WALL-002 - Verify Wall URL', async ({ page }) => {

    await expect(page).toHaveURL(
        'https://orgs1.sit.leagues.ai/wall'
    );
});


test('WALL-003 - Verify Wall page is loaded successfully', async ({ page }) => {

    const wall = new wallPage(page);

    await wall.verifyWallPageDisplayed();
});


test('WALL-004 - Verify Wall tabs are displayed', async ({ page }) => {

    const wall = new wallPage(page);

    await wall.verifyWallTabsDisplayed();
});


test('WALL-005 - Verify user can switch to Field Voice', async ({ page }) => {

    const wall = new wallPage(page);

    await wall.verifyTabSwitching();
});


test('WALL-006 - Verify All tab is selected by default', async ({ page }) => {

    const wall = new wallPage(page);

    await wall.verifyAllTabSelected();
});