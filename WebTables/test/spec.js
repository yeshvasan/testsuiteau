

describe('should check the web tables',()=>{

    browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    var adduser = require('../Page/AddUser_Form');
    it('should get add user form',()=>{
        adduser.clickAddUSer();
    });
    it('expeactations in form',()=>{
        var title = element(by.css('h3'));
        expect(title.getText()).toEqual('Add User');
    });
    it('should fill the form',()=>{
        adduser.enterFirstName('Sachin');
        adduser.enterLastName('Tendulkar');
        adduser.enterUserName('sachin');
        adduser.enterPassword('sachin');
        adduser.selectRole();
        adduser.enterMailID('sachin@tendulkar.com');
        adduser.phoneNumber('5476398764');
        adduser.clickSubmit();
        browser.sleep('5000');
    });
    it('should check added data is present',()=>{
        adduser.enterSearchValue('sachin');
      
    })
    it('should check',()=>{
        var rows = element.all(by.repeater('dataRow in displayedCollection'));
        browser.sleep('3000');
        rows.each(function(row){
            var cells = row.$$('td');
            cells.get(0).getText().then(function(txt){
                if(txt === 'Sachin'){
                    cells.get(9).$('button').click();
                }
            })
        })

        
     
    });
    var edit = require('../Page/Edit_Page');
    it('should edit',()=>{
        edit.editUserName('Tendulkar');
        edit.clickSave();
  })
    
   
    it('should check',()=>{
        var rows = element.all(by.repeater('dataRow in displayedCollection'));
        browser.sleep('3000');
        rows.each(function(row){
            var cells = row.$$('td');
            cells.get(0).getText().then(function(txt){
                if(txt === 'Sachin'){
                    cells.get(10).$('button').click();
                }
            })
        })
      
    });
    it('should delete',()=>{
        
        adduser.delete();
        browser.sleep('5000');
    });
    it('should edit',()=>{
        var rows = element.all(by.repeater('dataRow in displayedCollection'));
        browser.sleep('3000');
        rows.each(function(row){
            var cells = row.$$('td');
            cells.get(0).getText().then(function(txt){
                if(txt === 'Sachin'){
                    cells.get(9).$('button').click();
                }
            })
        })
      
    });
 
    
})
