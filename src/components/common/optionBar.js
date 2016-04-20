"use strict";
var React = require('react');
var Router  = require('react-router');
var LocationList = require('./locationList');
var SearchBox=require('./search');
var Link =Router.Link;
 var List=require("./list"); 
var OptionBar = React.createClass({

	render:function () {
		return (
			
			<div className="optionBar">
		        <div className="container">
		        <div className="col-sm-3">
		               <SearchBox  onChange={this.props.search}  status={this.props.status}  statusValue={this.props.statusValue} currentSearchCategoryHanhler={this.props.currentSearchCategoryHanhler}  currentSearchCategory={this.props.currentSearchCategory}/>
		            </div>
		            <div className="col-sm-2">
		                <LocationList  firstOption={"All"} onChange={this.props.locationHandler}/>
		            </div>
		            <div className="col-sm-offset-5 col-sm-2">
		                <div className="btn-group moveRight" >
		                   <button className="btn btn-primary fa fa-th-large" value="EmployeeList" onClick={this.props.onClick}></button>
		                   <button className="btn btn-primary fa fa-th-list" value="EmployeeListView" onClick={this.props.onClick}></button>
		                </div>
		            </div>
		        </div>
		        
		    </div>
		
			

			
			);
	}
});
module.exports = OptionBar;
