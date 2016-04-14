"use strict";
var React = require('react');
var Router  = require('react-router');
var LocationList = require('./locationList');
var Menu = require('./menu');
var Link =Router.Link;
 var List=require("./list"); 
var OptionBar = React.createClass({

	render:function () {
		return (
			
			<div className="optionBar">
		        <div className="container">
		            <div className="col-sm-2">
		                <LocationList />
		            </div>
		            <div className="col-sm-offset-6 col-sm-2">
		                <div className="btn-group">
		                   <button className="btn btn-primary fa fa-th-large" value="EmployeeList" onClick={this.props.onClick}></button>
		                   <button className="btn btn-primary fa fa-th-list" value="EmployeeListView" onClick={this.props.onClick}></button>
		                </div>
		            </div>
		        </div>
		        <Menu />
		    </div>
		
			

			
			);
	}
});
module.exports = OptionBar;
