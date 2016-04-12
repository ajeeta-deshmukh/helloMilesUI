"use strict";
var React = require('react');

var employeeApiCall= require('../../api/employeeApi');
 var EmployeeList = require('./employeeList');
var Employees = React.createClass({
     getInitialState: function() {
         return {
             employee:[]  
         };
     },

     componentDidMount: function() {
      if (this.isMounted()) {
           this.setState({employee:employeeApiCall.getAllEmployees()});
           };
     },

	render:function () {
          
		return (
               <div className="container">
                    <div className="col-sm-12">
                         <div className="col-sm-3">
                              <h1>Employee  List</h1>
                          </div>
                    </div>
                    <div className="col-sm-12">
                      <EmployeeList  empList={this.state.employee} />
                    </div>
               </div>
			);
	}
});
module.exports = Employees;