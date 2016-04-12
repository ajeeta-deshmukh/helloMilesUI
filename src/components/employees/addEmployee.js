"use strict";
var React = require('react');
var EmployeeApiCall = require('../../api/employeeApi');
var EmployeeForm = require("./employeeForm")
var EmployeeInfo = React.createClass({
    getInitialState: function() {
        return {
            employee: { user_Id: '', first_Name: '', last_Name: '', milesEmailId: '', primaryPhone: '', primaryEmail: '', emailAlias: '', userFeature: [] },
            userfeature:{
             git: { feature_Name: 'GITHUB', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             slack: { feature_Name: 'SLACK', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             trello: { feature_Name: 'TRELLO', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             socialcast: { feature_Name: 'SOCIALCAST', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             wiki: { feature_Name: 'WIKI', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             dropbox: { feature_Name: 'DROPBOX', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' } }
        };
    },
    setEmployeeState: function(event) {
        var field = event.target.name;
        var value = event.target.value;

        this.state.employee[field] = value;
        return this.setState({ employee: this.state.employee });
    },

    saveEmployee: function(event) {

        event.preventDefault();
        EmployeeApiCall.saveEmployee(this.state.employee);
    },
    render: function() {
        return ( <EmployeeForm employee = { this.state.employee }
        	userfeature={this.state.userfeature}
            onChange = { this.setEmployeeState }
            onSave = { this.saveEmployee }
            />
        );
    }
});
module.exports = EmployeeInfo;
