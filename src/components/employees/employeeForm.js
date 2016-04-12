"use strict";
var React = require('react');

var Input = require('../common/textInput');
var Switch = require('../common/switch');
var EmployeeForm = React.createClass({
    

setEmployeeUserFeature : function(event) {
  /*var git={},slack={};
  if(event.target.name==="GITHUB"){
      git = {
            feature_Name : event.target.name,
            status: event.target.value ,
            subscribed_On:(new Date()).getTime(),
            system_Identifier:'',
            additional_Info:''
       }
      };   
        this.props.userfeature.status= userfeature.status;
        console.log('userfeature : '+JSON.stringify(userfeature));
         console.log('UserFeature Size : '+JSON.stringify(this.props.employee.userFeature.size()));*/


         return this.props.employee.userFeature.push(userfeature);
        
    }, 
	render:function () {
       
   
		return (
              <div className="container">
              <div className="col-sm-12"><h1>Add Employee</h1></div>
               <div className="col-sm-offset-3 col-sm-3">
                <div className="col-sm-12 addimg"><img src="./images/default.png" class="img-responsive" alt="" /></div>
                <div className="col-sm-12">
                          <Switch onChange={this.setEmployeeUserFeature}
                           name="GITHUB"
                           value={this.props.userfeature.git.status} 
                           faClass="switch-handle fa fa-github"/>

                           <Switch onChange={this.setEmployeeUserFeature}
                           name="DROPBOX"
                           value={this.props.userfeature.slack.status} 
                           faClass="switch-handle fa fa-dropbox"/>

                     
               </div>
               </div>
              <div className="col-sm-3">
               <form >
                
               <div className="col-sm-12">
                 <Input name="first_Name"
                 label="First Name"
                
                 value={this.props.employee.first_Name}
                 onChange={this.props.onChange} />
                 </div>
               <div className="col-sm-12">
                  <Input name="last_Name"
                  label="Last Name"
                 
                 value={this.props.employee.last_Name}
                 onChange={this.props.onChange} />
                 </div>
                <div className="col-sm-12"> 
                 <Input name="milesEmailId"
                 label="Miles Email"
                 
                 value={this.props.employee.email_address}
                 onChange={this.props.onChange} />
                 </div>
                  <div className="col-sm-12">
                 <Input name="primaryPhone"
                 label="Primary Phone"
                 
                 value={this.props.employee.primary_phone_number}
                 onChange={this.props.onChange} />
                 </div>
                 <div className="col-sm-12">
                 <Input name="primaryEmail"
                 label="Personal Emai"
                 

                 value={this.props.employee.personal_Email}
                 onChange={this.props.onChange} />
                 </div>
                <div className="col-sm-12">
               <div className="form-group">
                  
                   <div className="field">
                   <textarea name="emailAlias"  className="form-control" rows="3" placeholder="Email Alias[es]"></textarea>
                   </div>
                 </div>
                 </div>

              
               
                 <input type="submit"  className="btn btn-primary" value="Add Employee" onClick={this.props.onSave} />
               </form>

               
                </div>
                
               </div>
			);
	}
});
module.exports = EmployeeForm;