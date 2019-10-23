const chrome = require("chromedriver")
module.exports = {
    "src_folders": "tests",
    "page_objects_path": "pageObjects",


    "webdriver": {
        "start_process": true,
        "server_path": chrome.path,
        "cli_args": [
            // "--verbose"
        ],
        "port": 9515
    },

    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "w3c": false
                }
            }
        }
    }
}