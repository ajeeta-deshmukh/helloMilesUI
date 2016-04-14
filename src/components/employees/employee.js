"use strict";
var React = require('react');
var OptionBar =require("../common/optionBar");
var employeeApiCall= require('../../api/employeeApi');
var EmployeeList = require('./employeeList');
var EmployeeListView = require('./employeeListView');
var Employees = React.createClass({
     getInitialState: function() {
         return {
             employee:[],
             layout:"EmployeeList"
         };
     },

     componentDidMount: function() {
      if (this.isMounted()) {
           this.setState({employee:employeeApiCall.getAllEmployees()});
           };
     },
     handleViewChange : function(event){
     
        if(event.target.value === "EmployeeListView"){
          this.setState({layout: "EmployeeListView"});
       }else{
          this.setState({layout: "EmployeeList"});
        }
     },
     
  
	render:function () {
        
        
		return (
            <div>
              <OptionBar layout={this.state.layout} onClick={this.handleViewChange}/>
               <div className="container">
                    <div className="col-sm-12">
                         <div className="col-sm-3">
                              <h1>Employees</h1>
                          </div>
                    </div>
                    <div className="col-sm-12">
                   { this.state.layout === "EmployeeList" ? <EmployeeList  empList={this.state.employee} /> : <EmployeeListView  empList={this.state.employee} /> }
                      
                  
                    </div>
                  
               </div>
               </div>
			);
	}
});
module.exports = Employees;