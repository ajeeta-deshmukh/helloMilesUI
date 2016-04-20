"use strict";
var React = require('react');
var OptionBar =require("../common/optionBar");
var EmployeeApiCall= require('../../api/employeeApi');
var EmployeeList = require('./employeeList');
var EmployeeListView = require('./employeeListView');

var Employees = React.createClass({
     getInitialState: function() {
         return {
             employee:[],
             layout:"EmployeeList",
             search :{firstName: undefined ,email: undefined ,phoneNo: undefined,location:"ALL",status:"Active" },
             location:"ALL",
             status:"Inactive",
             currentSearchCategory :"firstName"
         };
     },

     componentDidMount: function() {
      if (this.isMounted()) {
           this.setState({employee:EmployeeApiCall.getAllEmployees()});
           };
     },
     handleViewChange : function(event){
     
        if(event.target.value === "EmployeeListView"){
          this.setState({layout: "EmployeeListView"});
       }else{
          this.setState({layout: "EmployeeList"});
        }
     },
     

     searchResult : function(event){
            console.log("event.target.value    : "+ event.target.value);
            this.state.search.firstName =undefined;
            this.state.search.email =undefined;
            this.state.search.phoneNo =undefined;
           if (this.state.currentSearchCategory === "email") {
            this.state.search.email =   event.target.value;
          }else if (this.state.currentSearchCategory === "phoneNo") {
            this.state.search.phoneNo =   event.target.value;
          }else if(this.state.currentSearchCategory === "firstName"){
              this.state.search.firstName =   event.target.value;
          }

      
       this.state.search.location=this.state.location;
       this.state.search.status=this.state.status;

           if(event.target.value.length > 2 || this.state.status){
             this.setState({search:this.state.search});
             this.setState({employee:EmployeeApiCall.search(this.state.search)});
         }else{
           this.setState({employee:EmployeeApiCall.getAllEmployees()});
         }
     },
     setStatus : function(){
        this.setState({status : this.state.status === "Active" ? "Deleted" : "Active"});

            if( this.state.search.firstName === "" &&  this.state.search.phoneNo ==="" &&  this.state.search.email ===""){
              this.state.search.firstName = undefined;
              this.state.search.phoneNo = undefined;
               this.state.search.email = undefined;
            }

            this.state.search.location=this.state.location;
             this.state.search.status=this.state.status;

         
             this.setState({search:this.state.search});
             this.setState({employee:EmployeeApiCall.search(this.state.search)});
         
     },
     currentSearchCategoryHanhler :function (event) {

          this.state.currentSearchCategory = event.target.value;

          this.setState({currentSearchCategory:this.state.currentSearchCategory});
          console.log('currentSearchCategory : '+this.state.currentSearchCategory);
     },
    locationHandler :function (event) {
      console.log('current Location :'+event.target.value);
      this.state.location= event.target.value;
      this.setState({location:this.state.location });
      this.state.search.location=this.state.location;
       console.log('this.state.search.location :'+this.state.search.location);
       console.log('this.state.location :'+this.state.location);
      this.setState({search:this.state.search});
      this.setState({employee:EmployeeApiCall.search(this.state.search)});
    },
	render:function () {
        
        
		return (
            <div>
              <OptionBar  layout={this.state.layout} 
                          onClick={this.handleViewChange} 
                          search={this.searchResult} 
                          status={this.setStatus} 
                          statusValue={this.state.status}
                          currentSearchCategory={this.state.currentSearchCategory}
                          currentSearchCategoryHanhler={this.currentSearchCategoryHanhler}
                          locationHandler={this.locationHandler}
                        />
              
               <div className="container">
                    <div className="col-sm-12">
                         <div className="col-sm-3">
                              <h1>Employees</h1>
                          </div>
                    </div>
                    <div >
                   { this.state.layout === "EmployeeList" ? <EmployeeList  empList={this.state.employee} /> : <EmployeeListView  empList={this.state.employee} /> }
                      
                  
                    </div>
                  
               </div>
               </div>
			);
	}
});
module.exports = Employees;