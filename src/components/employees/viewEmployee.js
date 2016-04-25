"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');
  var Features = require('../common/viewFeature');
var Router = require('react-router');
 var employeeApiCall= require('../../api/employeeApi');

 var Link =Router.Link;
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
     
	render:function () {
 var dateFromTimeStamp = function (timestamp){
                var theDate = new Date( timestamp );
               
                return theDate.toGMTString();
            };
         
		return (
      <div className="container viewEmployeeDetailspage">

<div className="well">

  <h1>  {this.state.employee.first_Name} 
                       <i className="Fright">
                          <Link className="fa fa-pencil-square-o btn btn-success" title="Edit" to={"editEmployee"} params={{id:this.state.employee.user_Id}}> Edit</Link>
                          <Link className="fa fa-times  btn btn-danger" title="Delete" to={"deleteAccount"} params={{id:this.state.employee.user_Id}}> Delete</Link>
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


                               </div>             </div>
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

/*
<tr>
                                                    <td>Created By</td>
                                                    <td> : { this.state.employee.created_by }</td>
                                                  </tr>

                                                  <tr>
                                                    <td>Address</td>
                                                    <td> : { this.state.employee.address }</td>
                                                  </tr>
*/

 