"use strict";
var React = require('react');
var LocationList = require('../common/locationList');
var Input = require('../common/textInput');
var Switch = require('../common/switch');
var EmployeeForm = React.createClass({
    getInitialState() {
     
        return {
            
             git: { feature_Name: 'GITHUB', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             slack: { feature_Name: 'SLACK', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             trello: { feature_Name: 'TRELLO', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             socialcast: { feature_Name: 'SOCIALCAST', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             wiki: { feature_Name: 'WIKI', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' },
             dropbox: { feature_Name: 'DROPBOX', status: "D", subscribed_On: ''+(new Date()).getTime(), subscribed_By: '', system_Identifier: '', additional_Info: '' } 
            
        };  
    },
setUserFeatureData : function(){
  this.props.employee.userfeature=[];
  this.props.employee.userfeature.push(this.state.git);
  this.props.employee.userfeature.push(this.state.dropbox);
  this.props.employee.userfeature.push(this.state.slack);
  this.props.employee.userfeature.push(this.state.socialcast);
  this.props.employee.userfeature.push(this.state.trello);
  this.props.employee.userfeature.push(this.state.wiki);
   return this.props.employee.userfeature;     
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
 
    return setUserFeatureData();
  
  
    
     
}, 
	render:function () {
         var setData=this.setUserFeatureData();
		return (
              <div className="container">
              <div className="col-sm-12"><h1>+ Add Employee</h1></div>
               <div className="col-sm-offset-3 col-sm-3">
                <div className="col-sm-12 addimg">
                  <img src="./images/default.png" class="img-responsive" alt="" /></div>
                    <div className="col-sm-12">
                       <Switch onChange={this.setEmployeeUserFeature}
                               name="GITHUB"
                               value={this.state.git.status} 
                               faClass="switch-handle fa fa-github"/>

                       <Switch onChange={this.setEmployeeUserFeature}
                               name="SLACK"
                               value={this.state.slack.status} 
                               faClass="switch-handle fa fa-slack"/>

                       <Switch onChange={this.setEmployeeUserFeature}
                               name="TRELLO"
                               value={this.state.trello.status} 
                               faClass="switch-handle fa fa-trello"/>

                       <Switch onChange={this.setEmployeeUserFeature}
                               name="SOCIALCAST"
                               value={this.state.socialcast.status} 
                               faClass="switch-handle fa fa-socialcast"/>

                       <Switch onChange={this.setEmployeeUserFeature}
                               name="WIKI"
                               value={this.state.wiki.status} 
                               faClass="switch-handle fa fa-wikipedia-w"/>

                       <Switch onChange={this.setEmployeeUserFeature}
                               name="DROPBOX"
                               value={this.state.dropbox.status} 
                               faClass="switch-handle fa fa-dropbox"/>

                         
                   </div>
               </div>
         <div className="col-sm-3">
               <form >
                <div className="col-sm-12">
                   <LocationList />
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
              <input type="submit"  className="btn btn-primary" value="Add Employee" onClick={this.props.onSave}  />
               </form>

               
                </div>
                
               </div>
			);
	}
});
module.exports = EmployeeForm;