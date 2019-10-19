# foodNetworkAutomationProject

This is a QA Automation project with JavaScript/Selenium Webdriver/Nightwatch.js/Node.js

There are 3 PARTS to my Automation

Part 1: foodNetwork.js
This Is A Simple Automation
    1. Navigate to Food Network Website
    2. Logging in and Logging out
    3. Checking the navigation/category bar at the top of the website
    4. Going through the Search Bar Function to see if it works
    
Part 2: foodNetworkGetDinner.js
Harder Automation Technique
    0. Continued from Part 1
    1. Navigate to Food Network Website
    2. Open up a new browser to a food generator website (this website picks a random food for you: e.g. Chicken Salad)
    3. Takes the food (Chicken Salad) and plugs it back into Food Network Website
    4. Search for the food (Chicken Salad) on Food Network Website
    5. Gets the ingredients of the food (Chicken Salad) from Food Network Website
    6. Writes the ingredients down in a text file
    
Part 3: foodNetworkToImage.js
Harder Automation Technique
    0. Continued from Part 2
    1. Converts the list of ingredients to an array list (.txt file to .js file)
    2. Plugs each ingredients into Google Image Search Website
    3. Takes a Screen shot of each ingredients
    4. Now you have all the pictures of the ingredients and the direction on how to make the food
    
    
    

Here is how you can run my test!

Make a folder called testing-resources first

Download:
1. Selenium Server Standalone (put it in your testing-resources folder)
2. Chromedriver.exe (should be the current version) (put it in your testing-resources folder)
3. Node.js

In your terminal:
1. type: npm i -g nightwatch (you have nightwatch installed now)



You need to create a file called: nightwatch.props.js in your testing-resources folder.
Here is an example below: make sure the path will need to be your own path.

module.exports = {
    resourcePath: "C:\\Users\\danielpeng95\\testing-resources\\",
    seleniumServer: "selenium-server-standalone-3.141.59.jar",
    chromedriver: "chromedriver.exe"
 }


Clone Repo and Run my program:
Clone from my repo and type "nightwatch" in the terminal
This will run all 3 PARTS of my Automation
