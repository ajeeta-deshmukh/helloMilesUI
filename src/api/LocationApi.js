"use strict";

var Location = require('./locationData');
var _=require('lodash');

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};


var LocationApi = {
    getAllLocation: function() {
    	return _clone(Location);

    },
    getLocationByName : function (locationName) {
    	console.log('locationName : '+locationName);
    	console.log('location length : '+Location.length);
    	for(var i = 0; i < Location.length; i++)
		{
			console.log('Location.location_NAME : '+Location[i].location_NAME);
		  if(Location[i].location_NAME === locationName)
		  {
		  	console.log('Location['+i+']  : ' + JSON.stringify(Location[i]));
		    return Location[i];
		    
		  }
		}
		return ;
    }

    
};

module.exports= LocationApi;
