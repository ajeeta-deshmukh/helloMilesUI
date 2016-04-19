"use strict";
var React = require('react');
/*var CheckboxInput =require('./checkInput');
var Input = React.createClass({
    
	render:function () {
         


		return (
			<div className="col-sm-12" key={this.props.name}>
             <label className="switch">
		      <input className="switch-input"  name={this.props.name} type="checkbox"  onChange={this.props.onClick} value={this.props.value === "D" ? "A" : "D"}/>
		      <span className="switch-label"  data-on={this.props.name} data-off={this.props.name}></span>
		       <span className={this.props.faClass}></span> 
		      </label>
		      </div>
			);
	}
});
module.exports = Input;*/

var CheckboxInput = React.createClass({
  
  render: function () {
    return (
       
        <div className="col-sm-12" key={this.props.name}>
             <label className="switch">
            <input type="checkbox"
            className="switch-input"
              name={this.props.name}
              checked={this.props.checked}
              onClick={this.props.onClick}
              value={this.props.status}
			
               />
             
      			<span className="switch-label"  data-on={this.props.name} data-off={this.props.name}></span>
		       <span className={this.props.faClass}></span> 
		      </label>
		      </div>
    );
  }
 
});
module.exports = CheckboxInput;