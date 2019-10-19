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

    // 'log in log out': browser => {
    //     //simple logging in and logging out automation
    //     Food
    //         .waitForElementVisible('@burger', 20000)
    //         .click('@burger')
    //         .waitForElementVisible('@logIn', 20000)
    //         .click('@logIn')
    //         .waitForElementVisible('@email', 20000)
    //         .setValue('@email', 'softwareqa10@yahoo.com')
    //         .setValue('@password', 'SoftQA1995')
    //         .click('@submit')
    //         .verify.containsText('@nickName', 'SOFTWAREQA')
    // },

    // 'Categories': browser => {
    //     //automate navigating through each categories on the top of the page
    //     //basically just checking if everything points to the correct direction
    //     //custom command called .clickVerify in the page object
    //     Food.clickVerify('@recipes', '@header', 'Recipes')
    //     Food.clickVerify('@healthy', '@header', 'Healthy')
    //     Food.clickVerify('@party', '@header', 'Party')
    //     Food.clickVerify('@halloween', '@body', 'Halloween')
    //     Food.clickVerify('@shop', '@body', 'SHOP')
    //     Food.clickVerify('@shows', '@header', 'Shows')
    //     Food.clickVerify('@baking', '@body2', 'Baking')
    //     Food.clickVerify('@schedule', '@header', 'Schedule')
    // },

    // 'Search Function': browser => {
    //     //automate the search function and checking if the result is correct
    //     Food.searchVerify('@search', '@result', 'Chicken')
    // },

    'Get Dinner/Input Search/write file': browser => {
        //automate with new window browsers and window handles
        //utilized .getText and write files 
        var originalWindow = ""
        var newWindow = ""
        var dinner = ""

        Food.api.windowHandles(function (result) {
            originalWindow = result.value[0]
        })

        Food.api.openNewWindow()
        Food.api.windowHandles(function (result) {
            newWindow = result.value[1]
            Food.api.switchWindow(newWindow)
        })

        Food.api.url('https://randomwordgenerator.com/dinner-ideas.php')

        Food.waitForElementVisible('@dinner', 20000)
            .getText('@dinner', function (result) {
                dinner = result.value
                console.log(dinner)
                fs.writeFileSync('./testAssets/dinnerDish.txt', `${dinner}`)
            })

        Food.api.windowHandles(function (result) {
            Food.api.switchWindow(originalWindow)
        })

        let dinnerDish = ""
        Food
            .perform(() => {
                dinnerDish = fs.readFileSync('./testAssets/dinnerDish.txt')
            })
        Food
            .waitForElementVisible('@search')
            .perform(() =>{
                Food.setValue('@search', [dinnerDish, browser.Keys.ENTER])
            })

        Food
            .waitForElementVisible('@firstRes', 20000)
            .click('@firstRes')
            .waitForElementVisible('@ingredients', 30000)
            .getText('@ingredients', function (result) {
                var ing = result.value
                fs.writeFileSync('./testAssets/ingredients.txt', ing)
            })
            .getText('@directions', function (result) {
                var dir = result.value
                fs.writeFileSync('./testAssets/directions.txt', dir)
            })
    },

}