"use strict";
var React = require('react');
var Router = require('react-router');
var LocationApi = require('../../api/LocationApi');
var ConfigurationApi = require('../../api/configurationApi');
var ReactBSTable = require('react-bootstrap-table');  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn; 

var selectedRow={};
var UpdateSystenParam = React.createClass({

	getInitialState : function () {
	    return {
	        systemParamsList :[] 
	    };
	},

	componentDidMount: function() {
		var fields = "PARAM_KEY,PARAM_VALUE";
		var propertyName = "system_params";
      if (this.isMounted()) {
           this.setState({systemParamsList : ConfigurationApi.getSelectedSystemConfiguration(propertyName,fields)});
           };
           
     },
     cellEditProp : {
		  mode: "dbclick",
		  blurToSave: true,
		  afterSaveCell: function(row, cellName, cellValue){
		  	ConfigurationApi.saveConfiguration(row,"system_params","EDIT");
		  }
		},
	 selectRowProp : {
		  mode: "radio",
		  clickToSelect: true,
		  bgColor: "rgb(238, 193, 213)",
		  onSelect: function(row, isSelected){
			  selectedRow = row;
			}
		},

	 optionsProp : {
			afterInsertRow :  function(row){
				ConfigurationApi.saveConfiguration(row,"system_params","ADD");
			},
			afterDeleteRow :  function(rowKey){
				ConfigurationApi.saveConfiguration(selectedRow,"system_params","DELETE");
			}
		},
		
	  render: function(){
	  	return(
	  		<div className="col-md-8 col-md-offset-2">
	  		<BootstrapTable data={this.state.systemParamsList} striped={true} hover={true} search={true} pagination={true}
	  		cellEdit={this.cellEditProp} deleteRow = {true} options={this.optionsProp} selectRow={this.selectRowProp} maxHeight ="600px">
	      		<TableHeaderColumn dataField="param_KEY" isKey={true} dataAlign="center" dataSort={true} width="150">Location Name</TableHeaderColumn>
	      		<TableHeaderColumn dataField="param_VALUE" dataSort={true} width="450">Description</TableHeaderColumn>
  			</BootstrapTable>
  			</div>
  			
  		);
	  }
	
});


module.exports = UpdateSystenParam;
