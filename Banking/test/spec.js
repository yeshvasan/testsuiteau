

describe('should login to the customer',()=>{

    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    var homePage = require('../pages/Home_Page');

    it('should check the url of home page',()=>{
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        var text = element(by.className('mainHeading'));
        expect(text.getText()).toEqual('XYZ Bank');
        homePage.clickButton();
        
    });

    var customerPage = require('../pages/Customer_Login/Customer_Login');

    it('should check the customer page', ()=>{
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
        var homeButton = element(by.buttonText('Home'));
        homeButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
        var text = element(by.className('mainHeading'));
        expect(text.getText()).toEqual('XYZ Bank');
       customerPage.selectUser();
       customerPage.clickLogin();
        
    });

    it('should enter into the welcomePage',()=>{
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/account');
        var homeButton = element(by.buttonText('Home'));
        homeButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/account');
        var text = element(by.className('mainHeading'));
        expect(text.getText()).toEqual('XYZ Bank');
        var LogoutButton = element(by.buttonText('Logout'));
        LogoutButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/account');
    });
    it('should check the transaction link',()=>{
        var transactionButton = element(by.css('[ng-click="transactions()"]'));
        transactionButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/listTx');
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/account');
    });

    var depositPage = require('../pages/Customer_Login/DepositPage');
    it('should check the Deposit link',()=>{
        var deposit = element(by.css('[ng-click="deposit()"]'));
        deposit.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/account');
        var label = element(by.tagName('label'));
        expect(label.getText()).toEqual('Amount to be Deposited :');
        depositPage.enterAmount('100');
        depositPage.clickButton();
        var sucessMessage = element(by.className('error ng-binding'));
        expect(sucessMessage.getText()).toEqual('Deposit Successful');
    });
    
    var wihtDrawn = require('../pages/Customer_Login/Withdrawn');
    it('should check the withdraw link',()=>{
        var withdraw = element(by.css('[ng-click="withdrawl()"]'));
        withdraw.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/account');
        var label = element(by.tagName('label'));
        expect(label.getText()).toEqual('Amount to be Withdrawn :');
        wihtDrawn.enterAmount('100');
        wihtDrawn.clickWithdraw();
        var sucessMessage = element(by.className('error ng-binding'));
        expect(sucessMessage.getText()).toEqual('Transaction successful');
        
    });

    it('should check credit transaction',()=>{
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/account')
    })

    it('should check logout',()=>{
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/account');
        var logout = element(by.css('[ng-click="byebye()"]'));
        logout.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
        
    });
    it('should go home',()=>{
        var home = element(by.css('[ng-click="home()"]'));
        home.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        
    })
    
    
});

describe('should login to the manager',()=>{
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should check the manager portal',()=>{
        var manager = element(by.css('[ng-click="manager()"]'));
        manager.click();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager');
        
    });

    var addCustomer = require('../pages/Manager_Login/AddCustomer_Page');
    it('should check the add customer',()=>{
        addCustomer.clickAddCustomer();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust');
        var fNameLabel = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[1]/label'));
        expect(fNameLabel.getText()).toEqual('First Name :');
        addCustomer.firstName('Sachin');
        var lNameLabel = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[2]/label'));
        expect(lNameLabel.getText()).toEqual('Last Name :');
        addCustomer.lastName('Tendulkar');
        var postCod = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[3]/label'));
        expect(postCod.getText()).toEqual('Post Code :');
        addCustomer.postCode('231');
        element(by.className('btn btn-default')).click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(),5000,"Alert Not Found..");
        var alert = browser.switchTo().alert();
        var alertText = alert.getText();
        browser.sleep('2000');
        expect(alertText).toContain("Customer added successfully");
        alert.accept();
   
    });

    var openAcc = require('../pages/Manager_Login/OpenAccount');
    it('should open account',()=>{
        openAcc.clickOpenAccount();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount');
    });
    it('should expect labels',()=>{
        var customerName = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[1]/label'));
        expect(customerName.getText()).toEqual('Customer :');
        var currency = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[2]/label'));
        expect(currency.getText()).toEqual('Currency :');
    })
   it('should enter details',()=>{
       openAcc.selectCustomer();
      var checkCustomerName = element(by.model('custId')).element(by.css("option[value='6']"));
      expect(checkCustomerName.getText()).toEqual('Sachin Tendulkar');
      openAcc.selectCurrency();
      openAcc.clickProceed();
      
   });
    it('should get success message for account details',()=>{
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(),5000,"Alert Not Found..");
        var alert = browser.switchTo().alert();
        var alertText = alert.getText();
        browser.sleep('2000');
        expect(alertText).toContain("Account created successfully with account Number");
        alert.accept();
    })

        var cust = require('../pages/Manager_Login/Customers_Page');
    it('should check the url of customer page',()=>{
        cust.clickCustomer();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager/list');
       
    });
    
   it('should check the delete',()=>{
       var counting =  element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    
      expect(counting.count()).toEqual(6);
       
   })
   it('should search the customer',()=>{
    cust.searchCustomer('Sachin');
   
});
it('should check',()=>{
    var rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    browser.sleep('3000');
    rows.each(function(row){
        var cells = row.$$('td');
        cells.get(0).getText().then(function(txt){
            if(txt === 'Sachin'){
                cells.get(4).$('button').click();
            }
        })
    })
    
});
it('should go to the home page',()=>{
    cust.goToHomePage();
    expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.sleep('5000');
});
})
