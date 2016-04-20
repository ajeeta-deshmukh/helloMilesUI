
var $ = jquery = require('jquery');


var SearchUser = {
	search : function(search) {
    var result = "";
    var name = search.firstName === "" ? undefined : search.firstName;
    var email = search.email === "" ? undefined : search.email;
    var phoneNo = search.phoneNo === "" ? undefined : search.phoneNo;
    $.ajax({
        type:"POST",
        url: "http://localhost:8080/hellomiles/findUsers/name/"+name+"/status/"+search.status+"/primaryEmail/"+email+"/primaryPhone/"+phoneNo+"/location/"+search.location,
        async: false,
        success: function(data) {
            result = data.data;
            console.log('Data '+JSON.stringify(result));
        }
    });
    return result;
	}
};

module.exports =SearchUser;
