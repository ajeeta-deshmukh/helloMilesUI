"use strict";
var React = require('react');


 
var Footer = React.createClass({
	render:function () {
		return (
               <div className="container-fluid">
               	<div className="col-sm-12 well">
               		<div className="col-sm-offset-9 col-sm-3">
               			
               			 <a href="http://miles.in">@Miles.com</a>
               		</div>
               	</div>
               </div>
			);
	}
});
module.exports = Footer;