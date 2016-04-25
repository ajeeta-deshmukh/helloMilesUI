
var $ = jquery = require('jquery');


var Validation = {
    
    phoneNo : function(phoneno,phonelength,countrycode) {
        if(phoneno.length > phonelength || phoneno.length < phonelength || (phoneno%1) != 0){
            console.log('phoneno.length > phonelength');
                    return false;
                }
         return true;
    },
    email : function(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
     
    },
    checkForEmpty : function (key) {
        if(key.length <= 0){
            return true;
        }
        return false;

    }
};

module.exports =Validation;