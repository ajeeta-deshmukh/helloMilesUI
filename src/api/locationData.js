
var $ = jquery = require('jquery');
module.exports.Fetch = function() {
    var result = "";
    $.ajax({
        url: "http://localhost:8080/hellomiles/listLocations",
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
}
