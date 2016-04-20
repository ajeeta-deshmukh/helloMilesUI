"use strict";
var React = require('react');
var Router  = require('react-router');
var Link =Router.Link;

var Menu = React.createClass({
	render:function () {
		return (
			<div className="MenuButton right-btn">
			<ul className="listBox">
				<li><div className="topLevel fa fa-bars "></div>
					
					<div className="vertical_menu">
            	 		
                    	 	
                    		<ul className="menu">

	                            <li>
	                                <Link to="addEmployee" className="fa fa-user-plus"></Link> <span >Add Employee</span>
	                            </li>
	                             <li>
	                                <Link to="manageConfiguration" className="fa fa-cogs"></Link> <span>Manage Configuration</span>
	                            </li>
	                            <li>
	                                <Link to="addEmployee" className="fa fa-spin fa-cog margin-bottom"></Link> <span>System Configuration</span>
	                            </li>
                            
                        </ul>
                </div>
				</li>
			</ul>
	         </div>  
			
			);
	}
});
module.exports = Menu;
/*materialDesign
<div className="MenuButton right-btn">
			
			<ul className="listBox">
				<li><div className="topLevel fa fa-plus"></div>
					<ul>
						<li><Link to="addEmployee" className="fa fa-plus fa fa-user"></Link><b></b></li>
					</ul>
				</li>
			</ul>
					
					
				</div>*/
