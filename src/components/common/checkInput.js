'use strict';
var React = require('react');

var CheckboxInput = React.createClass({
  getInitialState: function () {
    return {
        checked: this.props.checked || false
     };
  },
  render: function () {
    return (
        <label>
            <input type="checkbox"
              className="switch-input" 
              name={this.props.name}
              checked={this.state.checked}
              onClick={this.handleClick}
              value={this.props.value} />
              
      </label>
    );
  },
  handleClick: function(e) {
    this.props.value ==="D" ? "A" :"D";
      this.setState({checked: e.target.checked});
  }
});


module.exports = CheckboxInput;