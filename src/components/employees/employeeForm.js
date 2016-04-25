"use strict";
var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom');
var WelcomeMessage = require('../../api/WelcomeMessage');
var NotificationSystem = require('react-notification-system');
var LocationList = require('../common/locationList');
var Link =Router.Link;
var Input = require('../common/textInput');
var Switch = require('../common/switch');
var Modal = require('react-modal');
var InputWithButton = require('../common/inputWithButton');

const customStyles = {
  content : {
    
    background            : "white",
    textAlign             : 'left',
    marginRight           : '-50%',
    marginTop             : '10px',
    borderRadius          : '8px',
  }
};



var EmployeeForm = React.createClass({
_notificationSystem: null,
   getInitialState : function () {
       return {
             notification :true, modalIsOpen: false,
             message :[]
       };
   },


openModal: function() {

  var gitMessage = WelcomeMessage.git(this.props.git.status);
  var slackMessage = WelcomeMessage.slack(this.props.slack.status);
  var socialcastMessage = WelcomeMessage.socialcast(this.props.socialcast.status);
  var wikiMessage = WelcomeMessage.wiki(this.props.wiki.status);
  var trelloMessage = WelcomeMessage.trello(this.props.trello.status);
  var dropboxMessage = WelcomeMessage.dropbox(this.props.dropbox.status);
  var goolgleApps  =  WelcomeMessage.googleApps();
      this.state.message =[];
        this.state.message.push(WelcomeMessage.welcomeNote());
        this.state.message.push(goolgleApps);
        this.state.message.push(wikiMessage);
        this.state.message.push(gitMessage);
        this.state.message.push(slackMessage);
        this.state.message.push(trelloMessage);
        this.state.message.push(dropboxMessage);
        this.state.message.push(socialcastMessage);
        this.state.message.push(WelcomeMessage.mailFooter());
      this.setState({message : this.state.message});
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },


   _addNotification: function(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'error',
      position: 'tc'
    });
  },
  componentDidMount: function() {
    this._notificationSystem = this.refs.notificationSystem;
  },

locationHandler : function (event) {
    alert("location name : "+document.getElementById('location_name').value);

    console.log('event value = '+event.target.value);
},
notificationHandler: function (){
    this.setState({notification : !this.state.notification})
},
viewNotificationEmail : function (e){
  e.preventDefault();
  if(this.state.notification){

  }


},


 	render:function () {
         
		return (
              <div className="container">
              
                                    <Modal className="col-sm-12 col-md-6 col-md-offset-3"
                                        isOpen={this.state.modalIsOpen}
                                        onAfterOpen={this.afterOpenModal}
                                        onRequestClose={this.closeModal}
                                        style={customStyles} >

                                        <h2 ref="subtitle" className="modalHeading">Welcome Message <button className="modalCloseButton btn btn-danger" onClick={this.closeModal}>close</button></h2>
                                        
                                       
                                        <div className="Modalcontent">
                                            <p>
                                                {this.state.message}
                                            </p>
                                        </div>
                                      </Modal>
                                     
              <div className="col-sm-12 col-md-4 col-md-offset-4 textCenter"><h1>Add Employee</h1></div>

               <div className="col-sm-12 col-md-offset-3 col-md-3 well">
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
         
            
                <div className="col-md-3 col-sm-12 well">
                <div className="col-sm-12">
                    <LocationList firstOption={"Select Location"} value={this.props.employee.location_name} onChange={this.props.location} error={this.props.errors.location_name}/>
                    
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
                         label= { "Miles Email "}
                         required="required" 
                         value={this.props.employee.email_address} 
                         onChange={this.props.onChange} 
                         error={this.props.errors.email_address} 
                           disabled="disabled"
                         />

              </div>
              <div className="col-sm-12">
                    <InputWithButton name="primary_phone_number" 
                         label="Primary Phone" 
                         required="required" 
                         value={this.props.employee.primary_phone_number} 
                         onChange={this.props.onChange} 
                         error={this.props.errors.primary_phone_number} 
                        countryCode={this.props.countryCode}
                        inputButtonPadding ="inputButtonPadding"
                         />
              
             </div>
              <div className="col-sm-12">
                  <Input name="personal_Email" 
                         label="Personal Email" 
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

               <div className={this.props.display ? " col-sm-12 col-md-3 " : "displayNone"}>
                  <div className="col-sm-12">
                      <div className="form-group">
                          <div className="field">
                              <Switch onClick={this.notificationHandler} 
                                      name="NOTIFICATION" 
                                      checked={this.state.notification} 
                                      value={this.state.notification} 
                                      faClass="switch-handle fa fa-info" />
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="form-group">
                          <div className="field">
                              <label htmlFor="Recipient">Recipient</label>
                              <select className="form-control" name='singleSelect' onChange={this.props.onChange}>
                                  <option defaultValue="Administrator">Administrator</option>
                                  <option value="Employee">Employee</option>
                              </select>
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-12">
                      <div className="form-group">
                          <div className="field">
                              <button className="btn btn-primary"  onClick={this.openModal} >
                                  View Mail
                              </button>




                              <button className="btn btn-primary" onClick={this._addNotification}>Add notification</button>
                               <NotificationSystem ref="notificationSystem" />
                          </div>
                      </div>
                  </div>

              </div>
              

               <div className="col-sm-12  textCenter">
              
               
                 <input type="submit"  className="btn btn-primary" value="Add Employee" onClick={this.props.onSave}  />
                 <Link className={this.props.display ?  " displayNone" : "fa fa-times moveright btn btn-danger" } title="Delete" to={"deleteAccount"} params={{id:this.props.employee.user_Id}}> Delete</Link>
                    <Link  className="btn btn-primary moveright" to="employee"> Cancel </Link>
                </div>
          

               
                
                
               </div>
			);
	}
});
module.exports = EmployeeForm;