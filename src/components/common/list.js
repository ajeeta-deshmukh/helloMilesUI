"use strict";
var React = require('react');

var LocationLists = React.createClass({
            propTypes: {
                LocationList: React.PropTypes.array.isRequired
            },

            render: function() {

                
                var createoptions = function(location) {

                    return (
                            <option  key = { location.location_NAME } value={location.location_NAME}> {location.location_NAME}</option>
                            );
                    };
                    return ( <select className="form-control" name='location_name' onChange={this.props.onChange}>
                           <option defaultValue={this.props.firstOption}>{this.props.firstOption}</option> { this.props.LocationList.map(createoptions, this) }  </select>);
                    }
                });

module.exports = LocationLists;

        
