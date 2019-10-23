var fs = require("fs")
var image
module.exports = {
    beforeEach: browser => {
        image = browser.page.imagePageObject()
        image.navigate()
        image.api.maximizeWindow()
    },

    after: browser => {
        image.end()
    },

    'image Grocery': browser => {
        //for loop to clear all the images
        image
            .perform(() => {
                for (k = -1; k < 100; k++) {
                    fs.unlink(`./screenShots/image${k}.png`, function (result) {
                    })
                }
            })

        //getting the ingredient list
        let line = fs.readFileSync("./testAssets/ingredients.txt")
        let newLine = line + ' '  //makes it a string
        let splitLine = newLine.split('\n')
        splitLine.shift()
        fs.writeFileSync('./testAssets/imageTestAsset.js', 'module.exports = ' + JSON.stringify(splitLine))

        var imageArray = require('../testAssets/imageTestAsset')
        imageArray[0] = 'Food ' + imageArray[0]

        console.log("there are " + imageArray.length + " ingredients!") //number of items on the ingredient list
        console.log("incredients below:")

        image
            .perform(() => {
                console.log(imageArray)
            })

        //searching for the name of the main food and its image
        let dinnerDish = ""
        image
            .perform(() => {
                dinnerDish = fs.readFileSync('./testAssets/dinnerDish.txt')
            })
        image
            .perform(() => {
                image
                    .clearSet('@search', dinnerDish)
                    .api.saveScreenshot('./screenShots/image-1.png')
            })

        //searching for the ingredients and its images
        image
            .perform(() => {
                for (i = 0; i < imageArray.length; i++) {

                    let j = i
                    image
                        .clearSet('@search', imageArray[j])
                        .waitForElementVisible('@firstRes', 20000)
                        .api.saveScreenshot(`./screenShots/image${j}.png`)

                    image
                        .perform(() => {
                            console.log("Image Saved: " + imageArray[j])
                        })
                }
            })
    },
}