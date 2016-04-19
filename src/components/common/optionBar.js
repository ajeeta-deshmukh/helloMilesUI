"use strict";
var React = require('react');
var Router  = require('react-router');
var LocationList = require('./locationList');
var SearchBox=require('./search');
var Link =Router.Link;
 var List=require("./list"); 
var OptionBar = React.createClass({
	getInitialState:function(){
		return{
			query:'',
			filteredData: this.props.data
		}
	},
doSearch:function(queryText){
		console.log(queryText)
		//get query result
		var queryResult=[];
		this.props.data.forEach(function(person){
			if(person.name.toLowerCase().indexOf(queryText)!=-1)
			queryResult.push(person);
		});
		
		this.setState({
			query:queryText,
			filteredData: queryResult
		})
	},
	render:function () {
		return (
			
			<div className="optionBar">
		        <div className="container">
		        <div className="col-sm-3">
		               <SearchBox query={this.state.query} doSearch={this.doSearch} />
		            </div>
		            <div className="col-sm-2">
		                <LocationList  firstOption={"All"}/>
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
