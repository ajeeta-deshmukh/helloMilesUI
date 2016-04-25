"use strict";
var React = require('react');
var Router = require('react-router');
var ConfigurationApi = require('../../api/configurationApi');
var ReactBSTable = require('react-bootstrap-table');  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn; 

var selectedRow={};
var ManageConfiguration = React.createClass({

	getInitialState : function () {
	    return {
	        LocationList :[] 
	    };
	},

	componentDidMount: function() {
		var fields = "LOCATION_NAME,DESCRIPTION,MAIL_DOMAIN,LANGUAGE,COUNTRY_PHONE_CODE,PHONE_NUMBER_LENGTH";
		var propertyName = "location_set";
      if (this.isMounted()) {
           this.setState({LocationList : ConfigurationApi.getSelectedSystemConfiguration(propertyName,fields)});
           };
           
     },
     cellEditProp : {
		  mode: "dbclick",
		  blurToSave: true,
		  afterSaveCell: function(row, cellName, cellValue){
		  	ConfigurationApi.saveConfiguration(row,"location_set","EDIT");
		  }
		},
	 selectRowProp : {
		  mode: "radio",
		  clickToSelect: true,
		  bgColor: "rgb(238, 193, 213)",
		  onSelect: function(row, isSelected){
			  console.log(row);
			  console.log("selected: " + isSelected);
			  selectedRow = row;
			}
		},

	 optionsProp : {
			afterInsertRow :  function(row){
				ConfigurationApi.saveConfiguration(row,"location_set","ADD");
			},
			afterDeleteRow :  function(rowKey){
				ConfigurationApi.saveConfiguration(selectedRow,"location_set","DELETE");
			}
		},
		
	  render: function(){
	  	return(
	  		<div className="col-md-8 col-md-offset-2">
	  		<BootstrapTable data={this.state.LocationList} striped={true} hover={true} insertRow ={true} search={true}
	  		cellEdit={this.cellEditProp} selectRow={this.selectRowProp} height="200" options={this.optionsProp} deleteRow = {true}>
	      		<TableHeaderColumn dataField="location_NAME" isKey={true} dataAlign="center" dataSort={true} width="75">Location Name</TableHeaderColumn>
	      		<TableHeaderColumn dataField="description" dataSort={true} width="75">Description</TableHeaderColumn>
	      		<TableHeaderColumn dataField="mail_DOMAIN" width="40">Mail Domain</TableHeaderColumn>
	      		<TableHeaderColumn dataField="language" width="30">Language</TableHeaderColumn>
	      		<TableHeaderColumn dataField="country_PHONE_CODE" width="70">Phone Code</TableHeaderColumn>
	      		<TableHeaderColumn dataField="phone_NUMBER_LENGTH" width="100">Phone Number Length</TableHeaderColumn>
  			</BootstrapTable>
  			</div>
  			
  		);
	  }
	
});


module.exports = ManageConfiguration;
