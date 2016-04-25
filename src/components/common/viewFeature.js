"use strict";
var React = require('react');



var Features = React.createClass({
            propTypes: {
                userFeature: React.PropTypes.array.isRequired
            },
            
            render: function() {

           var dateFromTimeStamp = function (timestamp){
                var theDate = new Date( timestamp );
               
                return theDate.toGMTString();
            };
                var setIcon = function(val, status) {

                    if (val === "DROPBOX") {
                        return "fa fa-dropbox dropboxColor";
                    } else if (val === "GITHUB") {
                        return "fa fa-github gitColor";
                    } else if (val === "SLACK") {
                        return "fa fa-slack slackColor";
                    } else if (val === "TRELLO") {
                        return "fa fa-trello trelloColor";
                    } else if (val === "WIKI") {
                        return "fa fa-wikipedia-w wikiColor";
                    } else if (val === "SOCIALCAST") {
                        return "fa fa-users dropboxColor";
                    }


                };
                var createSocialIconRow = function(userFeature) {
                    return ( <div key={ userFeature.feature_Name }>
                               
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id={"heading"+userFeature.feature_Name} >
                                      <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#"+userFeature.feature_Name } aria-expanded="false" aria-controls={userFeature.feature_Name}>
                                          <i className={  setIcon(userFeature.feature_Name) + " greenColor" }> </i> {userFeature.feature_Name}  <span className={ userFeature.status==="A" ?   "greenColor moveright" : "grayColor moveright" }>{ userFeature.status==="A" ?   "  active " : "  inactive " }</span>
                                        </a>
                                      </h4>
                                    </div>
                                    <div id={userFeature.feature_Name} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading"+userFeature.feature_Name}>
                                      <div className="panel-body">
                                       <table className="table ">
                                                
                                                <tbody>
                                                  <tr>
                                                    <td>Feature Name</td>
                                                   
                                                    <td>{userFeature.feature_Name}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Status</td>
                                                    
                                                    <td>{ userFeature.status==="A" ?   "Active" : "Inactive"}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Subscribed On</td>
                                                    
                                                    <td>{ dateFromTimeStamp(userFeature.subscribed_On) }</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                       


                                      </div>
                                    </div>
                                  </div>

                                  
                        

                        </div>);
                    };
                    return ( <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">{ this.props.userFeature.map(createSocialIconRow, this) } </div>);
                    }
                });

module.exports = Features;

            // <div className="empemail">{employee.email_address}</div>

            /* <div className="col-sm-2" title={ userFeature.status==="A" ? userFeature.feature_Name + "  -  active " : userFeature.feature_Name + " -  inactive " }>
                                    <i className={ userFeature.status==="A" ? setIcon(userFeature.feature_Name) + " greenColor" : setIcon(userFeature.feature_Name) + " grayColor" }>
                                    </i>
                                </div>*/
