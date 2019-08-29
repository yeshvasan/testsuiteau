var Home_Page = function(){
    this.clickButton = ()=>{
        element(by.buttonText('Customer Login')).click();
    };
}


module.exports = new Home_Page();