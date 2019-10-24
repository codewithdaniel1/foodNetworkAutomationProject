module.exports = {
    url: 'https://www.google.com/imghp?hl=en&tab=wi&ogbl',
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
                .waitForElementVisible(selector, 2000)
                .clearValue(selector)
                .setValue(selector, [text, this.api.Keys.ENTER])
            return this
        }

    }],
    elements: {
        search: '[name="q"]',
        firstRes: '[style="visibility: inherit;"]',

    }
}