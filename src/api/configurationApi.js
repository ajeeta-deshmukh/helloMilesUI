"use strict";

var Configuration = require('./configurationData');

var _=require('lodash');

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};


var ConfigurationApi = {
	getSelectedSystemConfiguration:function (propertyName,fields) {
       return Configuration.getSelectedSystemConfiguration(propertyName,fields);
    },
    saveConfiguration:function (row,propertyName,mode) {
        Configuration.save(row,propertyName,mode);
    },

    
};

module.exports= ConfigurationApi;