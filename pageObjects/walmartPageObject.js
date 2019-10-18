module.exports = {
    url: 'https://grocery.walmart.com',
    commands: [{
        clickVerify: function (selector, selector2, text) {
            this
                .waitForElementVisible(selector, 20000)
                .click(selector)
                .waitForElementVisible(selector2, 20000)
                .verify.containsText(selector2, text)
            return this
        },
        searchVerify: function (selector, selector2, text) {
            this
                .waitForElementVisible(selector, 20000)
                .setValue(selector, [text, this.api.Keys.ENTER]) //make sure you have "this.api." when you are in custom commands"
                .waitForElementVisible(selector2, 20000)
                .verify.containsText(selector2, text)
            return this
        },
        scrollDownBy: function (pixels) { //custom command for scrolling down
            this.api.execute(`window.scrollBy(0, ${pixels})`)
            return this
        },
        clearSet: function (selector, text) {
            this
                .api.pause(2000)
            this
                .waitForElementVisible(selector, 2000)
                .clearValue(selector)
                .setValue(selector, [text, this.api.Keys.ENTER])
                .api.pause(2000)
            return this
        }

    }],
    elements: {

        // //log in log out
        // burger: '[class="a-Icon a-Icon--menu o-HeaderFresh__a-Icon o-HeaderFresh__a-Icon--menu"]',
        // logIn: '[class="m-ProfileInfo__a-Button--Login"]',
        // email: { selector: '(//input[@data-gigya-name="loginID"])[1]', locateStrategy: 'xpath' },
        // password: { selector: '(//input[@data-gigya-name="password"])[1]', locateStrategy: 'xpath' },
        // submit: { selector: '(//input[@class="gigya-input-submit"])[1]', locateStrategy: 'xpath' },
        // nickName: '[class="m-ProfileInfo__a-Nickname"]',

        search: '[class="Search__searchField___3eXaL"]',
        noRes: '[data-automation-id="noResultsTitle"]',
        add: { selector: '(//button[@class="AddToCart__buttonAddToCart___6kAog AddToCart__buttonAddToCartLarge___bK2YK grocery-btn"])[1]', locateStrategy: 'xpath' },

        firstItem: { selector: '(//img[@class="productTile__productImage___2w76_"])[1]', locateStrategy: 'xpath' },
        // add: {selector: '(//button[@class="AddToCart__buttonAddToCart___6kAog AddToCart__buttonAddToCartLarge___bK2YK grocery-btn"])[1]', locateStrategy: 'xpath'},



    }
}