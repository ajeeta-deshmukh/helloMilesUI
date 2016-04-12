"use strict";
var React = require('react');
var Home= React.createClass({
	render:function () {
		return (
               <div className="jumbotron">
               	   <h1>Hello Miles!!</h1>
               	   <h3>Welcome to miles</h3>
               	  <a href="#about">About</a>
               </div>


			);
	}
});
module.exports = Home;