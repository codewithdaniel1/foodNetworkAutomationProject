module.exports = {
    url: 'https://www.foodnetwork.com',
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
    }],
    elements: {

        //log in log out
        burger: '[class="a-Icon a-Icon--menu o-HeaderFresh__a-Icon o-HeaderFresh__a-Icon--menu"]',
        logIn: '[class="m-ProfileInfo__a-Button--Login"]',
        email: { selector: '(//input[@data-gigya-name="loginID"])[1]', locateStrategy: 'xpath' },
        password: { selector: '(//input[@data-gigya-name="password"])[1]', locateStrategy: 'xpath' },
        submit: { selector: '(//input[@class="gigya-input-submit"])[1]', locateStrategy: 'xpath' },
        nickName: '[class="m-ProfileInfo__a-Nickname"]',

        //Categories
        header: '[class="o-AssetTitle__a-HeadlineText"]',
        body: '[class="container-site is-Fluid"]',
        body2: '[class="container-site "]',
        recipes: { selector: '(//a[@href="//www.foodnetwork.com/recipes"])[1]', locateStrategy: 'xpath' },
        healthy: { selector: '(//a[@href="//www.foodnetwork.com/healthy"])[1]', locateStrategy: 'xpath' },
        halloween: { selector: '(//a[@href="//www.foodnetwork.com/holidays-and-parties/packages/halloween"])[1]', locateStrategy: 'xpath' },
        shop: { selector: '(//a[@href="//www.foodnetwork.com/how-to/packages/shopping"])[1]', locateStrategy: 'xpath' },
        shows: { selector: '(//a[@href="//www.foodnetwork.com/shows"])[1]', locateStrategy: 'xpath' },
        baking: { selector: '(//a[@href="//www.foodnetwork.com/shows/halloween-baking-championship"])[1]', locateStrategy: 'xpath' },
        schedule: { selector: '(//a[@href="//www.foodnetwork.com/shows/tv-schedule"])[1]', locateStrategy: 'xpath' },

        //search function
        search: '[id="searchHeader"]',
        result: '[class="siteSearchResults"]',

        //Get Dinner/Input Search/Write File
        dinner: { selector: '(//div[@class="col-md-4 col-sm-6 col-xs-12 rh"])[1]', locateStrategy: 'xpath' }, //2nd browser
        firstRes: { selector: '(//span[@class="m-MediaBlock__a-HeadlineText"])[1]', locateStrategy: 'xpath' }, //1st foodNetwork browser
        ingredients: '[class="o-Ingredients"]',
        directions: '[class="bodyRight"]',

    }
}