var openAccount = function(){
    this.clickOpenAccount = ()=>{
        element(by.css('[ng-click="openAccount()"]')).click();
    };
    this.selectCustomer = ()=>{
        element(by.id('userSelect')).element(by.css("option[value='6']")).click();
    };

    this.selectCurrency = ()=>{
        element(by.model('currency')).element(by.css("option[value='Dollar']")).click();
    };
    this.clickProceed = ()=>{
        element(by.buttonText('Process')).click();
    }
    this.deleteCustomer = ()=>{
        element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/table/tbody/tr/td[5]/button')).click();
    }
}

module.exports = new openAccount();