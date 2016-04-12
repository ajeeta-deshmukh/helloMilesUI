"use strict";
var React = require('react');
var Router  = require('react-router');
var Link =Router.Link;
 
var OptionBar = React.createClass({
	render:function () {
		return (
			
			<div className="optionBar">
				<div className="container">
	               <div className="addEmployee right-btn"><Link to="addEmployee" className="btn btn-primary fa fa-plus" > Add Employee</Link></div>
				</div>
			</div>
			

			
			);
	}
});
module.exports = OptionBar;
