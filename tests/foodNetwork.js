var fs = require("fs")
var Food
module.exports = {
    beforeEach: browser => {
        Food = browser.page.foodNetworkPageObject()
        Food.navigate()
        Food.api.maximizeWindow()
    },

    after: browser => {
        Food.end()
    },

    'log in log out': browser => {
        //simple logging in and logging out automation
        Food
            .waitForElementVisible('@burger', 20000)
            .click('@burger')
            .waitForElementVisible('@logIn', 20000)
            .click('@logIn')
            .waitForElementVisible('@email', 20000)
            .setValue('@email', 'softwareqa10@yahoo.com')
            .setValue('@password', 'SoftQA1995')
            .click('@submit')
            .verify.containsText('@nickName', 'SOFTWAREQA')
    },

    'Categories': browser => {
        //automate navigating through each categories on the top of the page
        //basically just checking if everything points to the correct direction
        //custom command called .clickVerify in the page object
        Food.clickVerify('@recipes', '@header', 'Recipes')
        Food.clickVerify('@healthy', '@header', 'Healthy')
        Food.clickVerify('@party', '@header', 'Party')
        Food.clickVerify('@halloween', '@body', 'Halloween')
        Food.clickVerify('@shop', '@body', 'SHOP')
        Food.clickVerify('@shows', '@header', 'Shows')
        Food.clickVerify('@baking', '@body2', 'Baking')
        Food.clickVerify('@schedule', '@header', 'Schedule')
    },

    'Search Function': browser => {
        //automate the search function and checking if the result is correct
        Food.searchVerify('@search', '@result', 'Chicken')
    },
}