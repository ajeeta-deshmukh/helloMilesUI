
"use strict";
var React = require('react');
 
var Search = React.createClass({

	render:function () {
		return (
				<div>
					<div className="input-group searchOptions">
					        
					        <input type="search" className="form-control" id="searchBy" onChange={this.props.onChange} placeholder={"searchBy : "+this.props.currentSearchCategory} title="search" name={this.props.currentSearchCategory}/>
					        <div className="input-group-btn">
					            <button type="button" className="btn btn-default" onClick={this.props.status} >{this.props.statusValue === "Active" ?"Inactive": "Active"}</button>
					        </div>
					        <div className="input-group-btn">
					           
					            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					                <span className="caret"></span>
					                <span className="sr-only">Toggle Dropdown</span>
					            </button>
					            <ul className="dropdown-menu dropdown-menu-right">
					                <li className={this.props.currentSearchCategory === "email" ?"active" : ""}><div className="radio">
					                	<label>
					                		<input type="radio" name="search" id="inputEmail" value="email"  onChange={this.props.currentSearchCategoryHanhler}  />
					                		Email
					                	</label>
					                </div>   </li>
					                <li  className={this.props.currentSearchCategory === "firstName" ?"active" : ""}><div className="radio">
					                	<label>
					                		<input type="radio" name="search" id="firstName" value="firstName"  onChange={this.props.currentSearchCategoryHanhler}  />
					                		First Name
					                	</label>
					                </div></li>
					               
					                <li  className={this.props.currentSearchCategory === "phoneNo" ?"active" : ""}><div className="radio">
					                	<label>
					                		<input type="radio" name="search" id="phoneNo" value="phoneNo"  onChange={this.props.currentSearchCategoryHanhler}  />
					                		Phone number
					                	</label>
					                </div></li>
					            </ul>
					        </div>
					    </div>
					</div>
			);
	}
});
module.exports = Search;

/*<input  name="search"  onChange={this.props.onChange} classNameName="form-control"  placeholder="searchBy : First Name" title="search"   />
					*/