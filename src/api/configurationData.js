var $ = jquery = require('jquery');
module.exports.save = function(row,propertyName,mode) {
	var userProfile = {};
	var requestData = {};
    	userProfile.email="system";
		requestData.fields = row;
		requestData.userProfile = userProfile;
		console.log("data before stringify : "+requestData);
		var data=JSON.stringify(requestData);
		// data = $.param(requestData);
		console.log("data after stringify : "+data);
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