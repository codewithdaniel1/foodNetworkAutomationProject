module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    
    elements: { 

        //log in log out
        burger: '[class="a-Icon a-Icon--menu o-HeaderFresh__a-Icon o-HeaderFresh__a-Icon--menu"]',
        logIn: '[class="m-ProfileInfo__a-Button--Login"]',
        email: '[class="gigya-input-text gigya-valid"]',
        password: '[class="gigya-input-password gigya-valid"]',
        submit: {selector: '(//input[@data-screenset-element-id="__gig_template_element_10_1571334231948"])[1]', locatestrategy: 'xpath'},
        nickName: '[class="m-ProfileInfo__a-Nickname"]',

        
    }


    // elements: { //another way to write CSS selector
    //     searchBar: '[type="text"]',
    //     resultCity: '.current-weather__location',
    //     errorMessage: '.error-message__message',
    //     searchButton: '.enter-location__submit',
    //     searchAgainButton: '.current-weather__search-again',
    //     tryAgainButton: '.error-message__try-again'
    // }

    // elements: { //xPath Selector
    //     searchBar: {selector: '//input[@type="text"]', locateStrategy: 'xpath'},
    //     resultCity: {selector: '//h3[@class="current-weather__location"]', locateStrategy: 'xpath'},
    //     errorMessage: {selector: '//h3[@class="error-message__message"]', locateStrategy: 'xpath'},
    //     searchButton: {selector: '//button[@class="enter-location__submit"]', locateStrategy: 'xpath'},
    //     searchAgainButton: {selector: '//button[@class="current-weather__search-again"]', locateStrategy: 'xpath'},
    //     tryAgainButton: {selector: '//button[@class="error-message__try-again"]', locateStrategy: 'xpath'}
    // }
    
}