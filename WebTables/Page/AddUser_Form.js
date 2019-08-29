var addUser = function(){
    this.clickAddUSer = ()=>{
        element(by.buttonText('Add User')).click();
    };
    this.enterFirstName = (value)=>{
        element(by.name('FirstName')).sendKeys(value);
    };
    this.enterLastName = (value)=>{
        element(by.name('LastName')).sendKeys(value);
    };
    this.enterUserName = (value)=>{
        element(by.name('UserName')).sendKeys(value);
    };
    this.enterPassword = (value)=>{
        element(by.name('Password')).sendKeys(value);
    };
    this.selectRole =()=>{
        element(by.name('RoleId')).element(by.css("option[value='2']")).click();
    };
    this.enterMailID = (value)=>{
        element(by.name('Email')).sendKeys(value);
    };
    this.phoneNumber = (value)=>{
        element(by.name('Mobilephone')).sendKeys(value);
    };
    this.clickSubmit = ()=>{
        element(by.css('[ng-click="save(user)"]')).click();
    };
    this.enterSearchValue = (value)=>{
        element(by.model('searchValue')).sendKeys(value);
    };
    this.delete = ()=>{
        element(by.buttonText('OK')).click();
    };
    this.cancel = ()=>{
        element(by.buttonText('Cancel')).click();
    }
}

module.exports = new addUser();