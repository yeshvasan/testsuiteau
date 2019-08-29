var depositPage = function(){
    this.enterAmount = (value)=>{
        element(by.model('amount')).sendKeys(value);
    };

    this.clickButton = ()=>{
        element(by.className('btn btn-default')).click();
    }
}

module.exports = new depositPage();