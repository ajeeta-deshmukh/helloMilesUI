"use strict";
var React = require('react');
var Router = require('react-router');
var EmployeeApiCall = require('../../api/employeeApi');
var EmployeeForm = require("./employeeForm");
var Toastr=require('toastr');
var EmployeeInfo = React.createClass({

    mixins:[
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            employee: { user_Id: '',location_name:'' ,first_Name: '', last_Name: '', email_address: '', primary_phone_number: '', personal_Email: '', email_Alias: '', userfeature: [] },
                errors:{}
            };
    },
    
    setEmployeeState: function(event) {
        var field = event.target.name;
        var value = event.target.value;

        this.state.employee[field] = value;
        return this.setState({ employee: this.state.employee });
    },

    isFormValid: function() {
        var formError = true;
        this.state.errors ={};
        if(this.state.employee.first_Name.length <= 0){
            this.state.errors.first_Name ="First name is required";
            formError =false;
        }
        if(this.state.employee.last_Name.length <= 0){
            this.state.errors.last_Name ="Last name is required";
            formError =false;
        }
        if(this.state.employee.email_address.length <= 0){
            this.state.errors.email_address ="Email Address is required";
            formError =false;
        }
        if(this.state.employee.personal_Email.length <= 0){
            this.state.errors.personal_Email ="Personal Email  is required";
            formError =false;
        }
        if(this.state.employee.primary_phone_number.length <= 0){
            this.state.errors.primary_phone_number ="primary_phone is required";
            formError =false;
        }
        this.setState({errors: this.state.errors});
        return formError;
    },

    saveEmployee: function(event) {

        event.preventDefault();

       if(!this.isFormValid()){
            return;
        }
        EmployeeApiCall.saveEmployee(this.state.employee);
            Toastr.success("Employee Added Successfully ..");
            this.transitionTo('employee');
    },
    render: function() {
        return ( <EmployeeForm employee = { this.state.employee }
        	           onChange = { this.setEmployeeState }
                        onSave = { this.saveEmployee }
                        errors={this.state.errors}
            />
        );
    }
});
module.exports = EmployeeInfo;
