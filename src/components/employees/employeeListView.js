"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');
var Router = require('react-router');

 var Link =Router.Link;
 
var EmployeeListView = React.createClass({
    propTypes :{
      empList :React.PropTypes.array.isRequired
    },
     
  render:function () {
          var createemployeeRow = function(employee){
                return (
                        
                            <div className="col-sm-12 col-md-4 employeeCard" >
                                <div className="CardBox">
                                   
                                    <div className="empdetailsBox">
                                    <div className="empListOption">
                                                <Link className="fa fa-eye btn btn-info" title="View" to={"viewEmployee"} params={{id:employee.user_Id}}></Link>
                                        <Link className="fa fa-pencil-square-o btn btn-success" title="Edit" to={"editEmployee"} params={{id:employee.user_Id}}></Link>
                                        <Link className="fa fa-times  btn btn-danger" title="Delete" to={"deleteAccount"} params={{id:employee.user_Id}}></Link>
                                    </div>
                                        <ul className="list-group">
                                         <li className="list-group-item">
                                         <div className="TableImage">
                                         <img src={employee.image ? employee.image :"../images/default.png"} />
                                         </div>
                                         <div className="listViewDetails">
                                            <ul >
                                          
                                              <li >{employee.first_Name} </li>
                                              <li >{employee.email_address}</li>
                                             
                                              <li>{employee.primary_phone_number} [{employee.location_name}]</li>
                                              
                                            </ul>
                                              </div>
                                         </li>
                                          
                                          <li className="list-group-item">
                                              <div className="socialIcon">
                                                 <SocialAccount userFeature={employee.userfeature ? employee.userfeature:[] } />
                                              </div>
                                          </li>
                                        </ul>
                                         
                                    </div>
                                </div>
                             </div>
                        
                    );
          };
    return (<div>{this.props.empList.map(createemployeeRow, this)}</div>);
  }
});
module.exports = EmployeeListView;

 // <div className="empemail">{employee.email_address}</div>