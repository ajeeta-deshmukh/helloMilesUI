"use strict";
var React = require('react');

var Input = React.createClass({
    
	render:function () {
         


		return (
			<div className="col-sm-12" key={this.props.name}>
             <label className="switch">
		      <input className="switch-input" value={this.props.value === "D" ? "A" : "D"} name={this.props.name} type="checkbox" onChange={this.props.onChange}/>
		      <span className="switch-label"  data-on={this.props.name} data-off={this.props.name}></span>
		       <span className={this.props.faClass}></span> 
		      </label>
		      </div>
			);
	}
});
module.exports = Input;