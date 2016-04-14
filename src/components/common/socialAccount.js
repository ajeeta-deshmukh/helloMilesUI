"use strict";
var React = require('react');

var SocialIcon = React.createClass({
            propTypes: {
                userFeature: React.PropTypes.array.isRequired
            },

            render: function() {

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
                        return "fa fa-dropbox dropboxColor";
                    }


                };
                var createSocialIconRow = function(userFeature) {
                    return ( <div key={ userFeature.feature_Name }>
                                <div className="col-sm-2" title={ userFeature.status==="A" ? userFeature.feature_Name + "  -  active " : userFeature.feature_Name + " -  inactive " }>
                                    <i className={ userFeature.status==="A" ? setIcon(userFeature.feature_Name) + " greenColor" : setIcon(userFeature.feature_Name) + " grayColor" }>
                                    </i>
                                </div>
                            </div>);
                    };
                    return ( <div> { this.props.userFeature.map(createSocialIconRow, this) } </div>);
                    }
                });module.exports = SocialIcon;

            // <div className="empemail">{employee.email_address}</div>
