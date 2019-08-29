var customers = function(){
    this.clickCustomer = ()=>{
        element(by.css('[ng-click="showCust()"]')).click();
    };

    this.searchCustomer = (value)=>{
        element(by.model('searchCustomer')).sendKeys(value);
    };
    this.deleteCustomer = ()=>{
        element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    }
    this.goToHomePage = ()=>{
        element(by.buttonText('Home')).click();
    }
}

module.exports = new customers();