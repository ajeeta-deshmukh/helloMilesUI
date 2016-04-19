"use strict";
var React = require('react');
 var SocialAccount = require('../common/socialAccount');
var Router = require('react-router');
 var employeeApiCall= require('../../api/employeeApi');

 var Link =Router.Link;
var ViewEmployee = React.createClass({
   mixins:[
        Router.Navigation
    ],

    propTypes :{
      empList :React.PropTypes.array.isRequired
    },
getInitialState : function () {
    return {
          employee: []
    };
},

    componentWillMount : function () {
          this.setState({employee: employeeApiCall.getEmployeeById(this.props.params.id)});
    },
     
	render:function () {

         
		return (
      <div className="container">
              
                 <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingOne">
      <h4 className="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Employee Details
        </a>
      </h4>
    </div>
    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div className="panel-body">
       <div ><img src={this.state.employee.image != null ? this.state.employee.image :"../images/default.png"} className="img-risponsive" /></div>
       <div className="subtags">{this.state.employee.first_Name} {this.state.employee.last_Name}</div>
        <div ><div className="subtags">Location:</div> {this.state.employee.location_name}</div>
        <div ><div className="subtags">Contact:</div> {this.state.employee.primary_phone_number != null ? this.state.employee.primary_phone_number : "NA" }</div>
       <div></div>
      </div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo">
      <h4 className="panel-title">
        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         User Features :
        </a>
      </h4>
    </div>
    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div className="panel-body">

                                    <div className="socialIcon">
                                         <SocialAccount userFeature={this.state.employee.userfeature ? this.state.employee.userfeature:[] } />
                                    </div>  

      </div>
    </div>
  </div>
  
</div>

<Link to="employee" className="btn btn-primary">Back to Employee</Link>
</div>


               
			);
	}
});
module.exports = ViewEmployee;

 // <div className="empemail">{employee.email_address}</div>

 /*
<div className="col-sm-12 col-md-4 col-xs-12" key={this.state.employee.user_Id}>
                         <div className="empBox col-sm-12">

                              <div className="empInfo col-sm-12"> <a href={"/#employee"}>
                                   <div className="empImage col-sm-4">
                                      <div className="imageBox">
                                        <img src={this.state.employee.image != null ? this.state.employee.image :"../images/default.png"} className="img-risponsive" />
                                      </div>
                                    </div> 
                                   <div className="empDetail col-sm-8">
                                        <div className="empName">{this.state.employee.first_Name} {this.state.employee.last_Name}</div>
                                       
                                    </div>    
                                   </a>
                              </div>
                              <div className="detailsBox  col-sm-12">
                                    <div className="empOption">
                                       
                                       <Link className="fa fa-eye btn btn-info" title="View" to={"viewEmployee"} params={{id:this.state.employee.user_Id}}></Link>
                                        <Link className="fa fa-pencil-square-o btn btn-success" title="Edit"to={"viewEmployee"} params={{id:this.state.employee.user_Id}}></Link>
                                        <Link className="fa fa-times  btn btn-danger" title="Delete" to={"viewEmployee"} params={{id:this.state.employee.user_Id}}></Link>
                                    </div> 
                                    <div className="col-sm-12 Detailstags">
                                      <div ><div className="subtags">Email:</div> {this.state.employee.email_address}</div>
                                      <div ><div className="subtags">Contact:</div> {this.state.employee.primary_phone_number != null ? this.state.employee.primary_phone_number : "NA" }</div>
                                      <div ><div className="subtags">Location:</div> {this.state.employee.location_name}</div>
                                     </div> 
                                    <div className="socialIcon">
                                         <SocialAccount userFeature={this.state.employee.userfeature ? this.state.employee.userfeature:[] } />
                                    </div>  
                               </div> 
                         </div>
                    </div>
 */