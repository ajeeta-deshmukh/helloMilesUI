"use strict";

var employees = require('./employeeData').data;
var _=require('lodash');
var EmployeeById =  require('./employeeById');
var _generateId = function(employee) {
    return employee.first_Name.toLowerCase() + "-" + employee.last_Name.toLowerCase();
};
var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};


var EmployeeApi = {
    getAllEmployees: function() {
    	return _clone(employees);

    },

    getEmployeeById:function (id) {
      console.log('Employee Id : '+id);
    	var employee=EmployeeById.fetch(id);
      console.log('Employee Data By Id : '+employee.first_Name);
    	return _clone(employee);
    },

    saveEmployee:function (employee) {
       	console.log('Mock for Athor Save into db via Ajax Call');
        console.log('Employee : '+ JSON.stringify(employee));
       	if (employee.user_Id) {
       		var existingEmployeeIndex= _.indexOf(employee,_.find(employees,{user_Id:employee.user_Id}));
       		employee.split(existingEmployeeIndex,1,employee);
       	} else {
       		employee.user_Id= _generateId(employee);
       		employees.push(employee);
       	}
       	return _clone(employee);
    },

    deleteEmployee:function (id) {
    	console.log('Mock for Athor Save into db via Ajax Call');
    	_remove(employees,{user_Id:id});
    }

};

module.exports= EmployeeApi;
