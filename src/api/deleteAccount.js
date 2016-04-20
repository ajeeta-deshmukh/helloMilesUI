
var $ = jquery = require('jquery');


var DeleteAccount = {
	delete : function(userId) {
    var result = "";
    $.ajax({
        url: "http://localhost:8080/hellomiles/deleteAccount/userid/"+userId,
        async: false,
        success: function(data) {
            result = data;
            console.log('Delete Success: ');
        }
    });
    return result;
	}
};

module.exports =DeleteAccount;
