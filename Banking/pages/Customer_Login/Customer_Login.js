var customerPage = function(){
    this.selectUser = ()=>{
        element(by.id('userSelect')).element(by.css("option[value='2']")).click();
    };
    this.clickLogin = ()=> {
        element(by.buttonText('Login')).click();
    };

}

module.exports = new customerPage();