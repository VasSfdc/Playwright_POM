import { expect } from '@playwright/test';

export class wallPage {

    constructor(page) {
        this.page = page;

        this.wallTitle = page.getByRole('tab', {
            name: 'Wall',
            exact: true});
        this.performance = page.getByRole('tab', {
            name: 'Performance',
            exact: true});
        this.buzz = page.getByRole('tab', {
            name: 'Buzz',
            exact: true });
        this.survey = page.getByRole('tab', {
            name: 'Survey',
            exact: true });
        this.board = page.getByRole('tab', {
            name: 'Board',
            exact: true });
        this.incentives = page.getByRole('tab', {
            name: 'Incentives',
            exact: true });
        this.chat = page.getByRole('tab', {
            name: 'Chat',
            exact: true });
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
    async verifyWallTabsDisplayed() {
        await expect(this.wallTitle).toBeVisible();
        await expect(this.performance).toBeVisible();
        await expect(this.buzz).toBeVisible(); 
        await expect(this.survey).toBeVisible();
        await expect(this.board).toBeVisible();
        await expect(this.incentives).toBeVisible();
        await expect(this.chat).toBeVisible();
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
        await this.learnHubTab.click();

        // Verify LearnHub is selected
        await expect(this.learnHubTab).toHaveAttribute(
            'aria-selected',
            'true'
        );
        await this.featuredTab.click();

        // Verify Featured is selected
        await expect(this.featuredTab).toHaveAttribute(
            'aria-selected',
            'true'
        );
    }
    async verifyAllTabSelected() {
        // Verify All tab is selected by default
        await expect(this.allTab).toHaveAttribute(
            'aria-selected',
            'true'
        );
    }
}