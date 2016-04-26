"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');
  var Features = require('../common/viewFeature');
var Router = require('react-router');
 var employeeApiCall= require('../../api/employeeApi');
 var Modal = require('react-modal');
 var Link =Router.Link;


 const customStyles = {
  content : {
    width                 : "500px",
    background            : "white",
    textAlign             : 'left',
    marginRight           : '-50%',
    marginTop             : '10%',
    borderRadius          : '8px',
    marginLeft            : '35%' ,
    overflow              : 'hidden'
  }
};

var ViewEmployee = React.createClass({
   mixins:[
        Router.Navigation
    ],

   
getInitialState : function () {
    return {
          employee: []
    };
},

    componentWillMount : function () {
          this.setState({employee: employeeApiCall.getEmployeeById(this.props.params.id)});
    },
     handleDeactivate :function (event){
      employeeApiCall.deactivateEmployee(this.state.employee);

      this.transitionTo('employee');

     },
     handleDelete : function(event){
      employeeApiCall.deleteEmployee(event.target.value);
      this.transitionTo('employee');
     }, 
     openModal: function() {

 
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
	render:function () {
          var dateFromTimeStamp = function (timestamp){
                var theDate = new Date( timestamp );
               return theDate.toGMTString();
            };
         
		return (
          <div className="container viewEmployeeDetailspage">
                                   <Modal className="col-sm-12 col-md-6 col-md-offset-3"
                                        isOpen={this.state.modalIsOpen}
                                        onAfterOpen={this.afterOpenModal}
                                        onRequestClose={this.closeModal}
                                        style={customStyles} >

                                        <h2 ref="subtitle" className="modalHeading">Confirm Delete Action
                                              <button className="modalCloseButton btn btn-danger fa fa-times" onClick={this.closeModal}></button></h2>
                                        
                                       
                                        <div >
                                            <p>
                                            <div className="col-sm-12 confirmDialog">
                                            <div className="col-sm-12 well">
                                                   Are you sure you want to  {this.state.employee.date_Of_Leaving != null ? "delete " : "deactivate "} {this.state.employee.first_Name} Account.
                                                   <div className="col-sm-offset-4 col-sm-8">
                                                   {this.state.employee.date_Of_Leaving != null ? <button className="btn btn-danger" value={this.state.employee.user_Id} onClick={this.handleDelete}>Delete</button> : <button className="btn btn-danger" value={this.state.employee} onClick={this.handleDeactivate}>Deactivate</button>}
                                                       
                                                       <button className="btn btn-primary" onClick={this.closeModal}>Cancel</button>
                                                  </div> 
                                              </div>
                                               
                                                 
                                            </div>
                                              
                                            </p>
                                        </div>
                                      </Modal>
               <div className="well">

                  <h1>  {this.state.employee.first_Name} 
                       <i className="Fright">
                          <button type="button" value={this.state.employee}  onClick={this.openModal} name="delete" className="fa fa-times  btn btn-danger"> Delete </button>
                          <Link className="fa fa-pencil-square-o btn btn-success" title="Edit" to={"editEmployee"} params={{id:this.state.employee.user_Id}}> Edit</Link>
                       </i>                
                  </h1>


                  <div className="row">
                      <div className="col-sm-12 col-md-3">
                          <img src={this.state.employee.image !=null ? this.state.employee.image : "../images/default.png"} className="img-risponsive" />
                        </div>
                      <div className="col-sm-12 col-md-9">
                          <ul className="nav nav-tabs">
                              <li className="active"><a data-toggle="tab" href="#details">Employee Details</a></li>
                              <li><a data-toggle="tab" href="#features">Features</a></li>
                           </ul>
                          <div className="tab-content " >
                              <div id="details" className="tab-pane fade in active">
                                  <div className="col-sm-12 whiteColor">
                                    <div className="col-md-8 col-sm-12">
                                         <table className="table ">
                                                          
                                            <tbody>
                                              <tr>
                                                <td>Name</td>
                                                <td> : {this.state.employee.first_Name}</td>
                                              </tr>
                                              <tr>
                                                <td>Email Address</td>
                                                 <td> : { this.state.employee.email_address }</td>
                                              </tr>
                                              <tr>
                                                <td>Personal Email</td>
                                                <td> : { this.state.employee.personal_Email }</td>
                                              </tr>
                                              <tr>
                                                <td> Date Of Birth</td>
                                                <td> : { this.state.employee.date_of_Birth == null ? "NA" : this.state.employee.date_of_Birth}</td>
                                              </tr>
                                              
                                              <tr>
                                                <td> Primary Phone Number</td>
                                                <td> : { this.state.employee.primary_phone_number }</td>
                                              </tr>

                                              <tr>
                                                <td>Date of Joining</td>
                                                <td> : { dateFromTimeStamp(this.state.employee.date_of_Joining) }</td>
                                              </tr>

                                              <tr>
                                                <td>Location</td>
                                                <td> : { this.state.employee.location_name }</td>
                                              </tr>

                                              <tr>
                                                <td>Created On</td>
                                                <td> : { this.state.employee.created_on }</td>
                                              </tr>

                                            </tbody>
                                          </table>
                                        </div>  
                                 </div>
                              </div>
                              <div id="features" className="tab-pane fade">
                                    <Features userFeature={this.state.employee.userfeature ? this.state.employee.userfeature:[] }  />
                              </div>
                          </div>

                      <Link to="employee" className="fa fa-long-arrow-left btn btn-primary">  Back to Employee</Link> 
                      </div>

                  </div>
        </div>
    </div>
    );
	}
});
module.exports = ViewEmployee;

