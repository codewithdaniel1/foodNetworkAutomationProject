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
    
}