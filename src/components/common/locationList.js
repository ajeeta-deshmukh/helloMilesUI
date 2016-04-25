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
		 var wrapperClass= "form-group";
          if(this.props.error && this.props.error.length > 0){
            wrapperClass += " "+'has-error'; 
          }
          console.log('Location Value :'+this.props.value);
		return (
				 <div className={wrapperClass}>
						 <List LocationList={this.state.LocationList} value={this.props.value} firstOption={this.props.firstOption} onChange={this.props.onChange} />
						  <div className="input">{this.props.error}</div>
				 </div>
			);
	}
});
module.exports = LocationsList;
