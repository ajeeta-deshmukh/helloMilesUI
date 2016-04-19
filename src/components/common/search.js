
"use strict";
var React = require('react');
 
var Search = React.createClass({
handleSearch : function  (event) {
	console.log(" Search value :"+event.target.value);	
},
	render:function () {
		return (
				<div>
					<input type="search" name="search" id="inputSearch" className="form-control"  placeholder="searchBy : First Name" title="search" onChange={this.handleSearch}  />
					
                 </div>
			);
	}
});
module.exports = Search;
/*
"use strict";
var React = require('react');
 
var SearchBox = React.createClass({
	doSearch:function(){
		var query=this.refs.searchInput.getDOMNode().value; // this is the search text
		this.props.doSearch(query);
	},
	render:function(){
		return <input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
	}
});
module.exports = SearchBox;
<input list="browsers" className="form-control" />

						<datalist id="browsers">
						  <option value="Internet Explorer" />
						  <option value="Firefox" />
						  <option value="Chrome" />
						  <option value="Opera" />
						  <option value="Safari" />
						</datalist>
*/