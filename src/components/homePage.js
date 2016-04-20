"use strict";
var React = require('react');
var Router = require('react-router');

var Link =Router.Link;
var Home= React.createClass({
	render:function () {
		return (
               <div className="jumbotron">
               <div className="col-sm-12 col-md-offset-4 col-md-4 well Loginbox">
               	  <form>
				    <div className="form-group">
				        <label for="inputEmail">Email</label>
				        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
				    </div>
				    <div className="form-group">
				        <label for="inputPassword">Password</label>
				        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
				    </div>
				    <div className="checkbox">
				        <label><input type="checkbox" /> Remember me</label>
				    </div>
				    <Link to="employee" className="btn btn-primary">Login</Link>
				</form>
               </div>
                </div>


			);
	}
});
module.exports = Home;