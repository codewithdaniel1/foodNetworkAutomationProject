var fs = require("fs")
var walmartArray = require('../testAssets/walmartTestAsset')
console.log(walmartArray)
var Walmart
module.exports = {
    beforeEach: browser => {
        Walmart = browser.page.walmartPageObject()
        Walmart.navigate()
        Walmart.api.maximizeWindow()
    },

    after: browser => {
        Walmart.end()
    },

    'Walmart Grocery': browser => {
        let line = fs.readFileSync("./testAssets/ingredients.txt")
        let newLine = line + ' '
        let splitLine = newLine.split('\n')
        splitLine.shift()
        fs.writeFileSync('./testAssets/walmartTestAsset.js', 'module.exports = ' + JSON.stringify(splitLine))

        console.log(walmartArray.length)
        for (i = 0; i < walmartArray.length; i++) {

            let j = i
            Walmart
                .clearSet('@search', walmartArray[j])
            Walmart
                .waitForElementVisible('@add')
                .click('@add')


            // Walmart
            //     .element('css selector', '@noRes', function (result) {
            //         if (result.status != -1) {
            //             Walmart
            //                 .perform(() => {
            //                     console.log(walmartArray[j] + " is missing ********")
            //                 })
            //         }
            //     })


            // Walmart
            //     .isVisible('@noRes', function (result) {
            //         if (result.value) {
            //             Walmart
            //                 .api.pause(2000)
            //             Walmart
            //                 .api.back()
            //             Walmart
            //                 .perform(() => {
            //                     console.log(walmartArray[j] + " is missing ********")
            //                 })
            //         }

            //     })


            // .perform(() => {
            //     if (Walmart.isVisible('@noRes')) {
            //         Walmart
            //             .api.pause(2000)
            //         Walmart
            //             .api.back()
            //         Walmart
            //             .perform(() => {
            //                 console.log(walmartArray[j] + " is missing*****************")
            //             })
            //     }
            // })


            Walmart
                .perform(() => {
                    console.log(walmartArray[j])
                })
        }

        // console.log(walmartArray)


    },


}