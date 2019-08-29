var addCustomer = function(){
    this.clickAddCustomer = ()=>{
        element(by.css('[ng-click="addCust()"]')).click();
    };
    this.firstName = (value)=>{
        element(by.model('fName')).sendKeys(value);
    };
    this.lastName = (value)=>{
        element(by.model('lName')).sendKeys(value);
    };
    this.postCode = (value)=>{
        element(by.model('postCd')).sendKeys(value);
    };
    

}

module.exports = new addCustomer();