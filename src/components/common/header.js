"use strict";
var React = require('react');
var Router = require('react-router');

var Link =Router.Link;
 
var Header = React.createClass({
	render:function () {
		return (
			<div>
			<div className="navigation">
			<div className="container">
               <nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#"><div className="logo"></div></a>
						</div>

						
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li><Link to="app">Home</Link></li>
								<li><Link to="employee">Employee List</Link></li>
								<li><Link to="about">About</Link></li>
							</ul>
							
						</div>
					</div>
				</nav>
			</div>
			</div>
			

			</div>
			);
	}
});
module.exports = Header;
