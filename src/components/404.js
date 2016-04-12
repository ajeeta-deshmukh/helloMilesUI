"use strict";
var React = require('react');
var Router= require('react-router');
var Link =Router.Link;
 
var PageNotFound = React.createClass({
	render:function () {
		return (
			<div className="jumbotron">
				<div className="container">
					<h1>Page Not Found !!!</h1>
					<p>Whoops! Sorr there is nothing to see here</p>
					<p>
						<Link to='app' className="btn btn-primary btn-lg">Back to Home</Link>
					</p>
				</div>
			</div>
			);
	}
});
module.exports = PageNotFound;
