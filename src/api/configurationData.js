var $ = jquery = require('jquery');
module.exports.save = function(row,propertyName,mode) {
	var userProfile = {};
	var requestData = {};
    	userProfile.email="system";
		requestData.fields = row;
		requestData.userProfile = userProfile;
		var data=JSON.stringify(requestData);
	    var url = "http://localhost:8080/hellomiles/modifySelectedSystemConfiguration/propertyname/"+propertyName+"/"+mode;
	    $.ajax({
		      url: url,
		      method : 'POST',
		      contentType: "application/json",
		      data: data,
		      success: function(message) {
		        console.log(message);
		      },
		      error: function(err){
		          console.log(err);
		      }
		});
}

module.exports.getSelectedSystemConfiguration = function(propertyName,fields) {
	var result;
	    var url = "http://localhost:8080/hellomiles/getSelectedSystemConfiguration/propertyname/"+propertyName+"/fields/"+fields;
	    $.ajax({
		      url: url,
		      method : 'GET',
		      async: false,
		      success: function(data) {
		        result = data.data;
		      }
		});
		return result;
}

