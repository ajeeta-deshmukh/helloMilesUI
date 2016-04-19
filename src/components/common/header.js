"use strict";
var React = require('react');
var Router = require('react-router');

var Link =Router.Link;
 var Menu = require('./menu');
var Header = React.createClass({
	render:function () {
		return (
			<div>
			<div className="navigation">
			<div className="container">
               <nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						
						<div className="navbar-header">
							
							<a className="navbar-brand" href="#"><div className="logos">Hello Miles</div></a>
						</div>

						
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav navbar-right">
								
								
							</ul>
							
						</div>
					</div>
				</nav>
				<Menu />
			</div>
			</div>
			

			</div>
			);
	}
});
module.exports = Header;
