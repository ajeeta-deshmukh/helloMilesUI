
var $ = jquery = require('jquery');


var EmployeeById = {
	fetch : function(userId) {
    var result = "";
    $.ajax({
        
        url: "http://localhost:8080/hellomiles/getUserById/userId/"+userId,
        async: false,
        success: function(data) {
            result = data;
            console.log('Fetch Data : '+data.user_Id);
        }
    });
    return result;
	}
};

module.exports =EmployeeById;
