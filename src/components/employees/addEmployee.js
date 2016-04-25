"use strict";
var React = require('react');
var Router = require('react-router');
var EmployeeApiCall = require('../../api/employeeApi');
var EmployeeForm = require("./employeeForm");
var Toastr=require('toastr');
var Validate  = require("../common/validation.js"); 
var Location =require("../../api/LocationApi");

var EmployeeInfo = React.createClass({
    mixins:[
        Router.Navigation
    ],

    getInitialState: function() {
         return {

            employee:   this.props.params.id == null  ? { user_Id: '',location_name:'', first_Name: '', last_Name: '', email_address: '', primary_phone_number: '', personal_Email: '', email_Alias: '', userfeature: [],welcome_email:'' } : EmployeeApiCall.getEmployeeById(this.props.params.id),
                errors:{},
                git: { feature_Name: 'GITHUB', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
               slack: { feature_Name: 'SLACK', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
               trello: { feature_Name: 'TRELLO', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
               socialcast: { feature_Name: 'SOCIALCAST', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
               wiki: { feature_Name: 'WIKI', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
               dropbox: { feature_Name: 'DROPBOX', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' }, 
              welcome_email:null,
              checked: false  ,
              status:"D",
              locationData : [],
              countryCode: "+91"
            };
    },
    
setUserFeatureData : function(){

  this.state.employee.userfeature=[];
  this.state.employee.userfeature.push(this.state.git);
  this.state.employee.userfeature.push(this.state.dropbox);
  this.state.employee.userfeature.push(this.state.slack);
  this.state.employee.userfeature.push(this.state.socialcast);
  this.state.employee.userfeature.push(this.state.trello);
  this.state.employee.userfeature.push(this.state.wiki);
   console.log("employee State : "+JSON.stringify(this.state.employee));
   return this.setState({ employee: this.state.employee }); 

},
updateSwitchStatus : function (e){
  console.log("in updateSwitchStatus");
  console.log('e.target.name :'+e.target.name);
  console.log('e.target.value :'+e.target.value);
      
        if(e.target.checked){
          this.setState({checked: false});
          this.state.status="A";
          this.setState({status : this.state.status});
          console.log("e.target.checked : "+e.target.checked);
          this.setStatus(e.target.name,"A");
        }else{
           this.setState({checked: true});
          this.state.status="D";
          this.setState({status : this.state.status});
          this.setStatus(e.target.name,"D");
           console.log("e.target.checked : "+e.target.checked);
        }
        this.setState({status : this.state.status})
       
      },
setStatus : function (featureName,status){
  console.log('In setFeatureState');
  
  if (featureName === "DROPBOX") {
        this.state.dropbox.status = status;
         console.log('In  setStatus .dropbox');
        this.setState({dropbox:this.state.dropbox});
        console.log("DropBox State : "+JSON.stringify(this.state.dropbox));
    } else if (featureName === "GITHUB") {
        this.state.git.status = status;
        console.log('In   setStatus .git');
        this.setState({git:this.state.git}); 

        console.log("git State : "+JSON.stringify(this.state.git));
    } else if (featureName === "SLACK") {
        this.state.slack.status = status;
        console.log('In   setStatus .SLACK');
       this.setState({slack: this.state.slack});

       console.log("slack State : "+JSON.stringify(this.state.slack));
    } else if (featureName === "TRELLO") {
        this.state.trello.status = status;
        console.log('In  setStatus .trello');
       this.setState({trello: this.state.trello});

       console.log("trello State : "+JSON.stringify(this.state.trello));
    } else if (featureName === "WIKI") {
        this.state.wiki.status = status;
        console.log('In  setStatus .wiki');
       this.setState({wiki: this.state.wiki});

       console.log("wiki State : "+JSON.stringify(this.state.wiki));
    } else if (featureName === "SOCIALCAST") {
        this.state.socialcast.status = status;
        console.log('In setStatus .socialcast');
        this.setState({socialcast: this.state.socialcast});

        console.log("socialcast State : "+JSON.stringify(this.state.socialcast));
    }
return this.setUserFeatureData();
},


setEmployeeUserFeature : function(event) {
  if(this.state.git.feature_Name === event.target.name){
      this.state.git.status = event.target.value;
      this.setState({git : this.state.git});

  }else if(this.state.slack.feature_Name === event.target.name){
      this.state.slack.status = event.target.value;
      this.setState({slack : this.state.slack});
    
  }else if(this.state.trello.feature_Name === event.target.name){
      this.state.trello.status = event.target.value;
      this.setState({trello : this.state.trello});
    
  }else if(this.state.socialcast.feature_Name === event.target.name){
      this.state.socialcast.status = event.target.value;
      this.setState({socialcast : this.state.socialcast});
    
  }else if(this.state.wiki.feature_Name === event.target.name){
      this.state.wiki.status = event.target.value;
      this.setState({wiki : this.state.wiki});
    
  }else if(this.state.dropbox.feature_Name === event.target.name){
      this.state.dropbox.status = event.target.value;
      this.setState({dropbox : this.state.dropbox});
    
  }
 
    return this.setUserFeatureData();
  }, 

setFeatureState : function (features){
  console.log('In setFeatureState');
  if(features.status === "A"){
  if (features.feature_Name === "DROPBOX") {
        this.state.dropbox.status = "A";
         console.log('In  this.state.dropbox');
         this.setState({checked:true});
        this.setState({dropbox:this.state.dropbox});
    } else{
        this.setState({checked:false});
    }

     if (features.feature_Name === "GITHUB") {
        this.state.git.status = "A";
        console.log('In  this.state.git');
        this.setState({checked:true});
        this.setState({git:this.state.git}); 
    } else {
      this.setState({checked:false});
    }

    if (features.feature_Name === "SLACK") {
        this.state.slack.status = "A";
        console.log('In  this.state.SLACK');
        this.setState({checked:true});
       this.setState({slack: this.state.slack});
    } else {
      this.setState({checked:false});
    }

    if (features.feature_Name === "TRELLO") {
        this.state.trello.status = "A";
        console.log('In  this.state.trello');
        this.setState({checked:true});
       this.setState({trello: this.state.trello});
    } else{
      this.setState({checked:false});
    }

     if (features.feature_Name === "WIKI") {
        this.state.wiki.status = "A";
        console.log('In  this.state.wiki');
        this.setState({checked:true});
       this.setState({wiki: this.state.wiki});
    } else {
      this.setState({checked:false});
    }

    if (features.feature_Name === "SOCIALCAST") {
        this.state.socialcast.status = "A";
        console.log('In  this.state.socialcast');
        this.setState({checked:true});
        this.setState({socialcast: this.state.socialcast});
    } else {
      this.setState({checked:false});
    }
}
return this.setUserFeatureData();
},

componentWillMount: function() {
   this.state.employee.userfeature.map(this.setFeatureState, this);
if(this.props.params.id != null){
   
   this.state.countryCode = this.setLocationForEdit(this.state.employee.location_name); 
}
    
},
setLocationForEdit :function(locationName) {
  this.state.locationData.push(Location.getLocationByName(locationName.toUpperCase()));
  this.setState({locationData :  this.state.locationData});
  this.state.countryCode = this.state.locationData[0].country_PHONE_CODE;
  this.setState({countryCode : this.state.countryCode});

},
setLocation : function (event) {
 try {
  this.state.locationData = [];
  console.log('[set location ] Location event value : '+event.target.value.toUpperCase());
 
  if(event.target.value.toUpperCase() === "SELECT LOCATION"){
 
      this.state.errors.location_name = "Select office Location "
 
   this.setState({errors : this.state.errors});
 }else{
   this.state.locationData.push(Location.getLocationByName(event.target.value.toUpperCase()));
   this.state.employee.location_name = event.target.value.toUpperCase();
   this.state.errors.location_name="";
   this.setState({errors : this.state.errors});
    this.state.employee.email_address = this.state.employee.first_Name.toLowerCase()+"."+this.state.employee.last_Name.toLowerCase()+"@"+this.state.locationData[0].mail_DOMAIN
   this.setState({employee : this.state.employee});
   console.log('[ setLocation ]this.state.employee.location_name    '+this.state.employee.location_name);
  
  console.log('[ setLocation ]Location Data : '+JSON.stringify(this.state.locationData));
  this.state.countryCode = this.state.locationData[0].country_PHONE_CODE;
  this.setState({countryCode : this.state.countryCode});
  this.isFormValid();
 }

      
   
  
 }catch(err){
  console.log('[Error IN setLocation ]');

 }
},

    setEmployeeState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
       
        this.state.employee[field] = value;
         this.setState({ employee: this.state.employee });
        console.log('[setEmployeeState]this.state.locationData.location_NAME   '+this.state.locationData[0].location_NAME);

        console.log('[setEmployeeState]this.state.employee.location_name    '+this.state.employee.location_name);
        if(this.state.locationData[0].location_NAME === this.state.employee.location_name){
          
          if( field === "first_Name" || field === "last_Name" ){
                console.log('[setEmployeeState]this.state.employee.first_Name    '+this.state.employee.first_Name);
                console.log('[setEmployeeState]this.state.employee.last_Name    '+this.state.employee.last_Name);
             this.state.employee.email_address = this.state.employee.first_Name.toLowerCase()+"."+this.state.employee.last_Name.toLowerCase()+"@"+this.state.locationData[0].mail_DOMAIN
          }
          
        }
       
      this.isFormValid();

       return this.state.employee;
    },

    isFormValid: function() {
        var formError = true;
        this.state.errors ={};

    


if(this.state.employee.location_name !== ""  || this.state.employee.location_name !== "SELECT LOCATION"){

        if(Validate.checkForEmpty(this.state.employee.first_Name )){
            this.state.errors.first_Name ="First name is required";
           return false;
        }
        if(Validate.checkForEmpty(this.state.employee.last_Name)){
            this.state.errors.last_Name ="Last name is required";
             return false;
        }
       
        if(Validate.checkForEmpty(this.state.employee.personal_Email)){
            this.state.errors.personal_Email ="Personal Email  is required";
            formError =false;
        }
        if(!Validate.email(this.state.employee.personal_Email)){
            this.state.errors.personal_Email ="Please enter a valid email address";
            formError =false;
        }
        if(!Validate.phoneNo(this.state.employee.primary_phone_number, this.state.locationData[0].phone_NUMBER_LENGTH,this.state.locationData[0].country_PHONE_CODE)){
            this.state.errors.primary_phone_number ="Please Enter a valid Phone No ["+this.state.locationData[0].phone_NUMBER_LENGTH +" digits]";
            formError =false;
        }
}else {
   this.state.errors.location_name = "Select office Location "
   formError =false;
}

        


        this.setState({errors: this.state.errors});
        return formError;
    },

    

    saveEmployee: function(event) {

        event.preventDefault();

       if(!this.isFormValid()){
            return;
        }
        EmployeeApiCall.saveEmployee(this.state.employee);
            Toastr.success("Employee Added Successfully ..");
            this.transitionTo('employee');
    },
    render: function() {

        return ( <EmployeeForm employee = {this.state.employee}
        	             onChange = { this.setEmployeeState }
                        onSave = { this.saveEmployee }
                        errors={this.state.errors}
                        onClick={this.setEmployeeUserFeature}
                       
                        git={this.state.git}
                        slack={this.state.slack}
                        socialcast={this.state.socialcast}
                        trello={this.state.trello}
                        wiki={this.state.wiki}
                        dropbox={this.state.dropbox}
                        location= {this.setLocation}
                        countryCode = {this.state.countryCode}
                        display={  this.props.params.id == null  ? true : false}
                        updateSwitchStatus={this.updateSwitchStatus}
            />
        );
    }
});
module.exports = EmployeeInfo;
