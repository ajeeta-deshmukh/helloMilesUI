"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');
var Router = require('react-router');
 var employeeApiCall= require('../../api/employeeApi');
 var Link =Router.Link;
var EmployeeList = React.createClass({
   mixins:[
        Router.Navigation
    ],

    propTypes :{
      empList :React.PropTypes.array.isRequired
    },

  
	render:function () {
          var createemployeeRow = function(employee){
            
               return (
                    <div className="col-sm-12 col-md-4 col-xs-12" key={employee.user_Id}>
                         <div className="empBox col-sm-12">

                              <div className="empInfo col-sm-12"> <a href={"/#employee"}>
                                   <div className="empImage col-sm-4">
                                      <div className="imageBox">
                                        <img src={employee.image != null ? employee.image :"../images/default.png"} className="img-risponsive" />
                                      </div>
                                    </div> 
                                   <div className="empDetail col-sm-8">
                                        <div className="empName">{employee.first_Name} {employee.last_Name}</div>
                                       
                                    </div>    
                                   </a>
                              </div>
                              <div className="detailsBox  col-sm-12">
                                    <div className="empOption">
                                       
                                       <Link className="fa fa-eye btn btn-info" title="View" to={"viewEmployee"} params={{id:employee.user_Id}}></Link>
                                        <Link className="fa fa-pencil-square-o btn btn-success" title="Edit" to={"editEmployee"} params={{id:employee.user_Id}}></Link>
                                        <Link className="fa fa-times  btn btn-danger" title="Delete" to={"deleteAccount"} params={{id:employee.user_Id}}></Link>
                                    </div> 
                                    <div className="col-sm-12 Detailstags">
                                      <div ><div className="subtags">Email:</div> {employee.email_address}</div>
                                      <div ><div className="subtags">Contact:</div> {employee.primary_phone_number != null ? employee.primary_phone_number : "NA" }</div>
                                      <div ><div className="subtags">Location:</div> {employee.location_name}</div>
                                     </div> 
                                    <div className="socialIcon">
                                         <SocialAccount userFeature={employee.userfeature ? employee.userfeature:[] } />
                                    </div>  
                               </div> 
                         </div>
                    </div>
                    );
          };
		return (
              
                    <div>
                         
                        {this.props.empList.map(createemployeeRow, this)}
                             
                    </div>
               
			);
	}
});
module.exports = EmployeeList;

 // <div className="empemail">{employee.email_address}</div>