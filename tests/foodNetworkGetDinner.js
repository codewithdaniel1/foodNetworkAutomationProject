var fs = require("fs")
var Food
var dinner = ""

module.exports = {
    beforeEach: browser => {
        Food = browser.page.foodNetworkPageObject()
        Food.navigate()
        Food.api.maximizeWindow()
    },

    after: browser => {
        Food.end()
    },

    'Get Dinner/Input Search/write file': browser => {
        //automate with new window browsers and window handles
        //utilized .getText and write files 
        var originalWindow = ""
        var newWindow = ""

        Food.api.windowHandles(function (result) {
            originalWindow = result.value[0]
        })

        Food.api.openNewWindow()
        Food.api.windowHandles(function (result) {
            newWindow = result.value[1]
            Food.api.switchWindow(newWindow)
        })

        //getting dinner dish/option from a dinner generator website
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


        //searching for the dinner
        //getting back the dinner ingredients and directions
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