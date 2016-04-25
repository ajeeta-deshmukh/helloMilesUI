"use strict";
var React = require('react');
var Router  = require('react-router');

var Link =Router.Link;
 var List=require("./list"); 
var LocationsList = React.createClass({

	getInitialState : function () {
	    return {
	        sortBy :[]  
	    };
	},

	
	render:function () {
		 
		return (
				 <div>
					<div className="input-group ">
					       
					        <select className="form-control" name='sortEmployeeBy' onChange={this.props.onChange}>
                           			<option defaultValue="">{this.props.firstOption}</option>   
                           			<option value="first_Name">First Name</option>   
                           			<option value="last_Name">Last Name</option>  
                           			<option value="email_address">Miles Email</option>  
                           			<option value="location_name">Location Name</option>  
                           			<option value="personal_Email">Personal Email</option>
                           			<option value="primary_phone_number">Phone Number</option>
                           			<option value="date_of_Joining">Date of Joining</option>  
                           			 

                           </select>
					        <div className="input-group-btn">
					            <button type="button"  className={this.props.order  ? "fa fa-sort-amount-asc btn btn-default " : "fa fa-sort-amount-desc btn btn-default " } onClick={this.props.onClick} ></button>
					        </div>
					       
					    </div>
					</div>
			);
	}
});
module.exports = LocationsList;
