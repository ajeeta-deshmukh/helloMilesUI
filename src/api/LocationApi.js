"use strict";

var Location = require('./locationData');
//var LocationData2 = require('./locationData');
var _=require('lodash');

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};


var LocationApi = {
    getAllLocation: function() {
    	return _clone(Location.Fetch());

    }, 
};

module.exports= LocationApi;
