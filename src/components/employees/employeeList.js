"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');
var EmployeeList = React.createClass({
    propTypes :{
      empList :React.PropTypes.array.isRequired
    },
     
	render:function () {
          var createemployeeRow = function(employee){
            console.log("UserFreature  : "+JSON.stringify(employee.userfeature));
               return (
                    <div className="col-sm-4" key={employee.id}>
                         <div className="empBox col-sm-12">

                              <div className="empInfo col-sm-12"> <a href={"/#employee/"+employee.user_Id}>
                                   <div className="empImage col-sm-4">
                                      <div className="imageBox">
                                        <img src={employee.image ? employee.image :"../images/default.png"} className="img-risponsive" />
                                      </div>
                                    </div> 
                                   <div className="empDetail col-sm-8">
                                        <div className="empName">{employee.first_Name}</div>
                                       
                                    </div>    
                                   </a>
                              </div>
                              <div className="detailsBox  col-sm-12">
                                    <div className="empOption">
                                       
                                        <i className="fa fa-eye btn btn-info" title="View"></i>
                                        <i className="fa fa-pencil-square-o btn btn-success" title="Edit"></i>
                                        <i className="fa fa-times  btn btn-danger" title="Delete"></i>
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