# foodNetworkAutomationProject

This is a QA Automation project with JavaScript/Selenium Webdriver/Nightwatch.js/Node.js

There are 3 PARTS to my Automation

Part 1: foodNetwork.js
This Is A Simple Automation

    1.) Navigate to Food Network Website
    2.) Logging in and Logging out
    3.) Checking the navigation/category bar at the top of the website
    4.) Going through the Search Bar Function to see if it works
    
Part 2: foodNetworkGetDinner.js
Harder Automation Technique

    0.) Continued from Part 1
    1.) Navigate to Food Network Website
    2.) Open up a new browser to a food generator website (this website picks a random food for you: e.g. Chicken Salad)
    3.) Takes the food (Chicken Salad) and plugs it back into Food Network Website
    4.) Search for the food (Chicken Salad) on Food Network Website
    5.) Gets the ingredients of the food (Chicken Salad) from Food Network Website
    6.) Writes the ingredients down in a text file
    
Part 3: foodNetworkToImage.js
Harder Automation Technique

    0.) Continued from Part 2
    1.) Converts the list of ingredients to an array list (.txt file to .js file)
    2.) Plugs each ingredients into Google Image Search Website
    3.) Takes a Screen shot of each ingredients
    4.) Now you have all the pictures of the ingredients and the direction on how to make the food
    
    
    

Here is how you can run my test locally:

Clone my repo:

    git clone https://github.com/danielpeng95/foodNetworkAutomationProject.git
    
In your terminal type:

    npm i

And
    npm run test
    
This will run all 3 PARTS of my Automation!
