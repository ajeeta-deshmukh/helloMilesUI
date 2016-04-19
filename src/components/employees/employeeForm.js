"use strict";
var React = require('react');
var Router = require('react-router');
var LocationList = require('../common/locationList');
var Link =Router.Link;
var Input = require('../common/textInput');
var Switch = require('../common/switch');
var EmployeeForm = React.createClass({
   
locationHandler : function (event) {
    alert("location name : "+document.getElementById('location_name').value);

    console.log('event value = '+event.target.value);
},

	render:function () {
         
		return (
              <div className="container">

              <div className="col-sm-12 col-md-4 col-md-offset-4 textCenter"><h1>Add Employee</h1></div>

               <div className="col-sm12 col-md-offset-3 col-md-3 well">
                    <div className="col-sm-12 addimg well">
                      <img src="./images/default.png" class="img-responsive" alt="" />
                    </div>
                    <div className="col-sm-12">
                       <Switch onClick={this.props.updateSwitchStatus}
                               name="GITHUB"
                               checked ={this.props.git.status === "A" ? true : false}
                               
                               value={this.props.git.status} 
                               faClass="switch-handle fa fa-github"/>

                       <Switch checked ={this.props.slack.status === "A" ? true : false}
                               name="SLACK"
                                onClick={this.props.updateSwitchStatus}
                               value={this.props.slack.status} 
                               faClass="switch-handle fa fa-slack"/>

                       <Switch checked ={this.props.trello.status === "A" ? true : false}
                               name="TRELLO"
                                onClick={this.props.updateSwitchStatus}
                               value={this.props.trello.status} 
                               faClass="switch-handle fa fa-trello"/>

                       <Switch checked ={this.props.socialcast.status === "A" ? true : false}
                               name="SOCIALCAST"
                               value={this.props.socialcast.status} 
                                onClick={this.props.updateSwitchStatus}
                               faClass="switch-handle fa fa-socialcast"/>

                       <Switch checked ={this.props.wiki.status === "A" ? true : false}
                               name="WIKI"
                               value={this.props.wiki.status} 
                                onClick={this.props.updateSwitchStatus}
                               faClass="switch-handle fa fa-wikipedia-w"/>

                       <Switch checked ={this.props.dropbox.status === "A" ? true : false}
                               name="DROPBOX"
                               value={this.props.dropbox.status}
                                onClick={this.props.updateSwitchStatus} 
                               faClass="switch-handle fa fa-dropbox"/>

                         
                   </div>
               </div>
         
               <form >
                <div className="col-sm-3 well">
                <div className="col-sm-12">
                    <LocationList firstOption={ this.props.employee.location_name === null ? "Select Location": this.props.employee.location_name}  onChange={this.props.onChange} />
                    
                </div>
               <div className="col-sm-12">
                 <Input name="first_Name" 
                        label="First Name" 
                        value={this.props.employee.first_Name} 
                        onChange={this.props.onChange} 
                        error={this.props.errors.first_Name} 
                        required="required" />
              
              </div>
              <div className="col-sm-12">
                   <Input name="last_Name" 
                          label="Last Name" 
                          required="required" 
                          value={this.props.employee.last_Name} 
                          onChange={this.props.onChange} 
                          error={this.props.errors.last_Name} />
              </div>
              
              <div className="col-sm-12">
                  <Input name="email_address" 
                         label="Miles Email" 
                         required="required" 
                         value={this.props.employee.email_address} 
                         onChange={this.props.onChange} 
                         error={this.props.errors.email_address} />
              </div>
              <div className="col-sm-12">
                  <Input name="primary_phone_number" 
                         label="Primary Phone" 
                         required="required" 
                         value={this.props.employee.primary_phone_number} 
                         onChange={this.props.onChange} 
                         error={this.props.errors.primary_phone_number} />
              </div>

              <div className="col-sm-12">
                  <Input name="personal_Email" 
                         label="Personal Emai" 
                         required="required" 
                         value={this.props.employee.personal_Email} 
                         onChange={this.props.onChange} 
                         error={this.props.errors.personal_Email}/>
              </div>

              <div className="col-sm-12">
                  <div className="form-group">
                      <div className="field">
                          <textarea name="email_Alias" 
                                    className="form-control" 
                                    rows="3" 
                                    placeholder="Email Alias[es]">
                          </textarea>
                      </div>
                  </div>
              </div>
               </div>
               <div className="col-sm-12  textCenter">
              <input type="submit"  className="btn btn-primary" value="Add Employee" onClick={this.props.onSave}  />
              <Link  className="btn btn-primary moveright" to="employee"> Cancel </Link>
</div>
               </form>

               
                
                
               </div>
			);
	}
});
module.exports = EmployeeForm;