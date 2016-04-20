"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');

 
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
                                        <ul className="list-group">
                                         <li className="list-group-item">
                                         <div className="TableImage">
                                         <img src={employee.image ? employee.image :"../images/default.png"} />
                                         </div>
                                         <div className="listViewDetails">
                                            <ul >
                                          
                                              <li >{employee.first_Name}</li>
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