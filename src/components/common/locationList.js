"use strict";
var React = require('react');
var Router  = require('react-router');
var LocationApi = require('../../api/LocationApi');
var Link =Router.Link;
 var List=require("./list"); 
var LocationsList = React.createClass({

	getInitialState : function () {
	    return {
	        LocationList :[]  
	    };
	},

	componentDidMount: function() {
      if (this.isMounted()) {
           this.setState({LocationList : LocationApi.getAllLocation()});
           };
           console.log('Location List : '+JSON.stringify(this.state.LocationList));
     },
	render:function () {
		return (
				<div className="form-group">
						 <List LocationList={this.state.LocationList}  firstOption={this.props.firstOption} onChange={this.props.onChange} />
				 </div>
			);
	}
});
module.exports = LocationsList;
