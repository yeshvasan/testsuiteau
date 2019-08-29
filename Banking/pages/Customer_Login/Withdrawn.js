var withdrawn = function(){
    this.enterAmount = (value)=>{
        element(by.model('amount')).sendKeys(value);
    }

    this.clickWithdraw = ()=>{
        element(by.className('btn btn-default')).click();
    }
}

module.exports = new withdrawn();