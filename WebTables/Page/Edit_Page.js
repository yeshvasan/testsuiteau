var editPage = function(){
    this.editUserName = (value)=>{
        element(by.name('UserName')).sendKeys(value);
    };
    this.clickSave = ()=>{
        element(by.buttonText('Save')).click();
    };
}

module.exports = new editPage();