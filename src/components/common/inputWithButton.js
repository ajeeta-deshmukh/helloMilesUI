/*inputWithButton.js*/
"use strict";
var React = require('react');

var InputWithButton = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label:React.PropTypes.string.isRequired,
        onChange:React.PropTypes.func.isRequired,
        placeholder:React.PropTypes.string,
        value:React.PropTypes.string,
        error:React.PropTypes.string
    },
     
	render:function () {
          var wrapperClass= "form-group";
          if(this.props.error && this.props.error.length > 0){
            wrapperClass += " "+'has-error'; 
          }


		return ( 
             <div className={wrapperClass}>
             <label htmlFor={this.props.label}>{this.props.label}<span className={this.props.required}>*</span></label>
	            <div className="input-group ">
	             	

	                
		                	<div className="input-group-btn">
		                      <button type="button" className={"btn btn-default "+this.props.inputButtonPadding +" "+this.props.displayLeft} >{this.props.countryCode}</button>
		                  	</div>
			                    <input type="text"
			                    name={this.props.name}
			                    className="form-control"
			                    placeholder={this.props.placeholder}
			                    ref={this.props.name}
			                    value={this.props.value}
			                    disabled={ this.props.disabled}
			                    onChange={this.props.onChange} />
			                    
						 </div>
						 <div className="input-group">{this.props.error}</div>
             </div>  
			);
	}
});
module.exports = InputWithButton;



                  
                  
                 
              

