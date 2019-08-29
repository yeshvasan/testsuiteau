var welcomePage = function(){
    var homeButton = element(by.buttonText('Home'));
        homeButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/account');
    browser.sleep('3000');
}

module.exports = new welcomePage();