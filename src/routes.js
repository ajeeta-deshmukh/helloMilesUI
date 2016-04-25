"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;

var Route = Router.Route;
var NotFoundRoute =Router.NotFoundRoute;

var routes = (
		<Route name="app" path="/" handler={require('./components/app')} >
			<DefaultRoute handler={require('./components/homePage')} />
			<Route name="employee" handler={require('./components/employees/employee')} />
			<NotFoundRoute handler={require('./components/404')} />
			<Route name="addEmployee" path="addEmployee" handler={require('./components/employees/addEmployee')} />
			<Route name="editEmployee" path="addEmployee/:id" handler={require('./components/employees/addEmployee')} />
			<Route name="viewEmployee" path="viewEmployee/:id" handler={require('./components/employees/viewEmployee')} />
			<Route name="deleteAccount" path="deleteAccount/:id" handler={require('./components/employees/deleteEmployee')} />
			<Route name="updateLocation" path="updateLocation" handler={require('./components/configuration/updateLocation')} />
			<Route name="updateSystemParam" path="updateSystemParam" handler={require('./components/configuration/updateSystemParam')} />
		</Route>
	);

module.exports = routes;