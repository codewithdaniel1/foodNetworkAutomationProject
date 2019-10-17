var food
module.exports = {
    beforeEach: browser => {
        food = browser.page.foodNetworkPageObject()
        food.navigate()
    },
    after: browser => {
        food.end()
    },
    'log in log out': browser => {
        food
            .waitForElementVisible('@burger', 20000)
            .click('@burger')
            .waitForElementVisible('@logIn', 20000)
            .click('@logIn')
            .waitForElementVisible('@email', 20000)
            .setValue('@email', 'softwareqa10@yahoo.com')
            .setValue('@password', 'SoftQA1995')
            .click('@submit')
            .verify.containsText('@nickName', 'softwareqa')
    }
}