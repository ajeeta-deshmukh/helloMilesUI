"use strict";
var React = require('react');


 
var About = React.createClass({
	render:function () {
		return (
               <div className="container">
               	<div className="col-sm-12 well">
               		<div className="col-sm-3">
               			<h1>About</h1>
               			 <a href="#home">Home</a>
               		</div>
               	</div>
               </div>
			);
	}
});
module.exports = About;