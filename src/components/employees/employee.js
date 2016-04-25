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
             currentSearchCategory :"firstName",
             order:true,
             sortBy : 'first_Name'
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
      var field=event.target.value;
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
             this.state.employee =EmployeeApiCall.search(this.state.search);
      this.setState({employee: this.state.employee});
      console.log("[searchResult ] No of Employee Found :"+this.state.employee.length);
         }else{
           this.state.employee =EmployeeApiCall.search(this.state.search);
      this.setState({employee: this.state.employee});
      console.log("[searchResult ] No of Employee Found :"+this.state.employee.length);
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
             this.state.employee =EmployeeApiCall.search(this.state.search);
      this.setState({employee: this.state.employee});
      console.log("[setStatus ] No of Employee Found :"+this.state.employee.length);
         
     },
     currentSearchCategoryHanhler :function (event) {
            document.getElementById("searchBy").value="";
          this.state.currentSearchCategory = event.target.value;

          this.setState({currentSearchCategory:this.state.currentSearchCategory});
          console.log('[currentSearchCategory] : '+this.state.currentSearchCategory);
     },
    locationHandler :function (event) {
      
      this.state.location= event.target.value;
      this.setState({location:this.state.location });
      this.state.search.location=this.state.location;
      
       console.log('this.state.location :'+this.state.location);
      this.setState({search:this.state.search});

      this.state.employee =EmployeeApiCall.search(this.state.search);
      this.setState({employee: this.state.employee});
      console.log("[locationHandler ] No of Employee Found :"+this.state.employee.length);
    },
    getSortDataType : function (value) {
      if(value === 'first_Name' || value === 'last_Name' || value === 'email_address'  || value === "personal_Email"){
        return "string";
      }
      return "parseInt"
    },
    sortHandler : function  (event) {
        console.log(event.target.name + ' : '+event.target.value );
        this.state.sortBy = event.target.value;
        this.setState({sortBy : this.state.sortBy});
        this.sort();
  
      
    },
    orderHandler :function(){
      this.state.order = !this.state.order;
      this.setState({order : this.state.order});
      this.sort();
    },
    sort : function () {
      console.log("[ order ] : "+this.state.order +" [ sortBy ] : "+this.state.sortBy);
      if(this.getSortDataType(this.state.sortBy) === "string"){
            this.setState({employee : EmployeeApiCall.sort(this.state.employee,this.state.sortBy,this.state.order, function(a){return a.toUpperCase()})});
      }else {
        this.setState({employee : EmployeeApiCall.sort(this.state.employee,this.state.sortBy,this.state.order, parseInt)});
      
      }
    },
	render:function () {
        
          
		return (
            <div >
             
              <OptionBar  layout={this.state.layout} 
                          onClick={this.handleViewChange} 
                          search={this.searchResult} 
                          status={this.setStatus} 
                          statusValue={this.state.status}
                          currentSearchCategory={this.state.currentSearchCategory}
                          currentSearchCategoryHanhler={this.currentSearchCategoryHanhler}
                          locationHandler={this.locationHandler}
                          sortHandler={this.sortHandler}
                          order={this.state.order}
                          orderHandler={this.orderHandler}
                        />
              
               <div className="container">
                    <div className="col-sm-12">
                         <div className="col-sm-12">
                              <h1 className="col-sm-6">Employees</h1>
                              <div className="col-sm-6"><div className="textAlignRight" id="searchResults"> {this.state.status === "Active" ? "Inactive" : "Active"} employee : {this.state.employee.length} , Location :{this.state.location}</div></div>
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
/*this.getSortDataType(event.target.value) === "string" ?  function(a){return a.toUpperCase()} : "parseInt"*/
