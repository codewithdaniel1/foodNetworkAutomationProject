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
    //     Food.searchVerify('@search', '@result', 'Chicken')
    // },

    // 'Get Dinner/Input Search/write file': browser => {
    //     var originalWindow = ""
    //     var newWindow = ""
    //     var dinner = ""

    //     Food.api.windowHandles(function (result) {
    //         originalWindow = result.value[0]
    //     })

    //     Food.api.openNewWindow()
    //     Food.api.windowHandles(function (result) {
    //         newWindow = result.value[1]
    //         Food.api.switchWindow(newWindow)
    //     })

    //     Food.api.url('https://randomwordgenerator.com/dinner-ideas.php')

    //     Food.waitForElementVisible('@dinner', 20000)
    //         .getText('@dinner', function (result) {
    //             dinner = result.value
    //             console.log(dinner)
    //         })

    //     Food.api.windowHandles(function (result) {
    //         Food.api.switchWindow(originalWindow)
    //     })

    //     Food
    //         .waitForElementVisible('@search')
    //         .perform(() =>
    //             Food.setValue('@search', [dinner, browser.Keys.ENTER])
    //         )

    //     Food
    //         .waitForElementVisible('@firstRes', 20000)
    //         .click('@firstRes')
    //         .waitForElementVisible('@ingredients', 20000)
    //         .getText('@ingredients', function (result) {
    //             var ing = result.value
    //             fs.writeFileSync('./testAssets/ingredients.txt', ing)
    //         })
    //         .getText('@directions', function (result) {
    //             var dir = result.value
    //             fs.writeFileSync('./testAssets/directions.txt', dir)
    //         })
    // },

    'Walmart Grocery': browser => {
        Food
        let line = fs.readFileSync("./testAssets/ingredients.txt")
        let newLine = line + ' '
        let splitLine = newLine.split('\n')
        console.log('********************* ', splitLine)
        splitLine.shift()
        fs.writeFileSync('./testAssets/walmart.js', splitLine)
    }
}