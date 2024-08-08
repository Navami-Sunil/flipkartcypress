const furniture=require('../e2e/pages/furniture.page');
const selectitem=require('../e2e/pages/selectitem.page');
Given(/^I am on the Flipkart home page$/,async () => {
   cy.visit('https://www.flipkart.com/');
});

When(/^I click on the Furniture category$/,async () => {
	await furniture.furnitureselect();
});

When(/^I select a furniture item$/,async () => {
	await selectitem.selecttable();
});

Then(/^I take a screenshot of the payment page$/,async () => {
	cy.screenshot();
	cy.wait(4000);
});
