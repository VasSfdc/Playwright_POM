import { expect } from '@playwright/test';

export class wallPage {

    constructor(page) {
        this.page = page;

        this.wallTitle = page.getByRole('tab', {
            name: 'Wall',
            exact: true});
        this.allTab = page.getByRole('tab', {
            name: 'All',
            exact: true
        });

        this.fieldVoiceTab = page.getByRole('tab', {
            name: 'Field Voice',
            exact: true
        });

        this.learnHubTab = page.getByRole('tab', {
            name: 'LearnHub',
            exact: true
        });

        this.featuredTab = page.getByRole('tab', {
            name: 'Featured',
            exact: true
        });
    }

    async verifyWallPageDisplayed() {
        await expect(this.wallTitle).toBeVisible();
        await expect(this.allTab).toBeVisible();
        await expect(this.fieldVoiceTab).toBeVisible();
        await expect(this.learnHubTab).toBeVisible();
        await expect(this.featuredTab).toBeVisible();
    }
    async verifyTabSwitching() {

        // Click Field Voice
        await this.fieldVoiceTab.click();

        // Verify Field Voice is selected
        await expect(this.fieldVoiceTab).toHaveAttribute(
            'aria-selected',
            'true'
        );
    }
}