"use strict";
var React = require('react');
var Router = require('react-router');
var LocationApi = require('../../api/LocationApi');
var ReactBSTable = require('react-bootstrap-table');  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn; 


var ManageConfiguration = React.createClass({

	 products : [{
      id: 1,
      name: "Item name 1",
      price: 100
	  },{
	      id: 2,
	      name: "Item name 2",
	      price: 100
	  }],
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
	  render: function(){
	  	return(
	  		<div className="col-md-8 col-md-offset-2">
	  		<BootstrapTable data={this.state.LocationList} striped={true} hover={true} insertRow ={true} search={true}>
	      		<TableHeaderColumn dataField="location_NAME" isKey={true} dataAlign="center" dataSort={true}>Location Name</TableHeaderColumn>
	      		<TableHeaderColumn dataField="description" dataSort={true}>Description</TableHeaderColumn>
	      		<TableHeaderColumn dataField="mail_DOMAIN">Mail Domain</TableHeaderColumn>
	      		<TableHeaderColumn dataField="language">Language</TableHeaderColumn>
	      		<TableHeaderColumn dataField="country_PHONE_CODE">Phone Code</TableHeaderColumn>
	      		<TableHeaderColumn dataField="phone_NUMBER_LENGTH">Phone Number Length</TableHeaderColumn>

  			</BootstrapTable>
  			</div>
  			
  		);
	  }
	
});


module.exports = ManageConfiguration;
