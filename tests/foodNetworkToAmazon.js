var fs = require("fs")
var amazonArray = require('../testAssets/amazonTestAsset')
console.log(amazonArray)
var amazon
module.exports = {
    beforeEach: browser => {
        amazon = browser.page.amazonPageObject()
        amazon.navigate()
        amazon.api.maximizeWindow()
    },

    after: browser => {
        amazon.end()
    },

    'amazon Grocery': browser => {
        let line = fs.readFileSync("./testAssets/ingredients.txt")
        let newLine = line + ' '
        let splitLine = newLine.split('\n')
        splitLine.shift()
        fs.writeFileSync('./testAssets/amazonTestAsset.js', 'module.exports = ' + JSON.stringify(splitLine))

        console.log(amazonArray.length)
        for (i = 0; i < amazonArray.length; i++) {

            let j = i
            amazon
                .clearSet('@search', amazonArray[j])
            amazon
                .waitForElementVisible('@add')
                .click('@add')


            // amazon
            //     .element('css selector', '@noRes', function (result) {
            //         if (result.status != -1) {
            //             amazon
            //                 .perform(() => {
            //                     console.log(amazonArray[j] + " is missing ********")
            //                 })
            //         }
            //     })


            // amazon
            //     .isVisible('@noRes', function (result) {
            //         if (result.value) {
            //             amazon
            //                 .api.pause(2000)
            //             amazon
            //                 .api.back()
            //             amazon
            //                 .perform(() => {
            //                     console.log(amazonArray[j] + " is missing ********")
            //                 })
            //         }

            //     })


            // .perform(() => {
            //     if (amazon.isVisible('@noRes')) {
            //         amazon
            //             .api.pause(2000)
            //         amazon
            //             .api.back()
            //         amazon
            //             .perform(() => {
            //                 console.log(amazonArray[j] + " is missing*****************")
            //             })
            //     }
            // })


            amazon
                .perform(() => {
                    console.log(amazonArray[j])
                })
        }

        // console.log(amazonArray)


    },


}