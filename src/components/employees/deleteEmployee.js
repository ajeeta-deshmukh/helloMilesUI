"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');
var Router = require('react-router');
 var employeeApiCall= require('../../api/employeeApi');

 var Link =Router.Link;
var DeleteEmployee = React.createClass({
   mixins:[
        Router.Navigation
    ],

    
getInitialState : function () {
    return {
          employee: []
    };
},

    componentDidMount : function () {
          this.setState({employee: employeeApiCall.deleteEmployee(this.props.params.id)});
    },
     
	render:function () {

         
		return (
      
  <div className="container">
  <div class="jumbotron">
    <div class="container">
      <h1>Employee Account Successfully Deleted </h1>
      
      <p>
        <Link to="employee" className="btn btn-primary">Back to Employee</Link>
      </p>
    </div>
  </div>

</div>


               
			);
	}
});
module.exports = DeleteEmployee;

 