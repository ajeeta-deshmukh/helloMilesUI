"use strict";
var React = require('react');
var $ = jquery = require('jquery');


var WelcomeMessage = {
	welcomeNote : function(){
		return (<div className="col-sm-12">
	    			<h2>A Miles user has just been created for you in the following user stores:</h2> 
				</div>);
    	},
	

	googleApps : function() {
		return (<div className="col-sm-12 well">
		    		<h2>Google Apps</h2>
					
					<p> <h3>Access to: email (gmail), calendar, docs and contacts.</h3>
						
						<div>Username: </div>
						<div>Password: </div>
					</p>
		    	</div>
			);
	},
    git : function(git) {
    	if(git==="A"){
		    return (<div className="col-sm-12 well">
		    		<h2>GitHub</h2>
					<p> <h3>If you have a GitHub handle, please provide that at your convenience.</h3></p>
		    	</div>);
    	}
    	return ;
    },
    slack : function(slack) {

    	if(slack==="A"){
		   return (<div className="col-sm-12 well">
		    			<h2>Slack</h2> 
						<p><h3>Our internal chat forum. You have received a separate invitation in your Miles inbox.
								 You set your own username and password.
 							Please use a descriptive username, like “firstnamelastname” or “firstname.lastname” so that others can easily recognise you on Slack.</h3></p>
		    		</div>);
				}
		return;
    },
    socialcast : function(socialcast) {
   if(socialcast==="A"){
		   return (<div className="col-sm-12 well">
				<h2>Socialcast</h2>
					<p> <h3>Our internal discussion forum, "Facebook style". You have a separate invitation in your Miles inbox.
							You authenticate with your primary Google account, i.e. your Miles email address.</h3>
					</p>
				</div>);
				}
		return;
    },
    trello : function(trello) {
    if(trello==="A"){
		   return (<div className="col-sm-12 well">
				<h2>Trello</h2>
					<p> <h3>Our cards based project collaboration tool. You have received a separate invitation in your Miles inbox.
							 That invite is for the Miles organisation. Please see  
							 <a href="https://wiki.miles.no/display/DRIFT/Trello+-+Add+new+users+to+the+Miles+organisation"> 
							 	https://wiki.miles.no/display/DRIFT/Trello+-+Add+new+users+to+the+Miles+organisation
							 </a> 
							 for instructions on how to sign up. (Invitations for specific boards will be done separately on demand.)
						</h3>
					</p>
				</div>);
				}
		return;
    },
    dropbox : function(dropbox) {
    if(dropbox==="A"){
		   return (<div className="col-sm-12 well">
				<h2>Dropbox Business</h2>
					<p> <h3>Our file server if you will. You have received a separate invitation in your Miles inbox.
					 		If you already have a Dropbox account, please see <a href="https://www.dropbox.com/business/two-dropboxes">
					 			https://www.dropbox.com/business/two-dropboxes
					 		</a>
						</h3>
					</p>
				</div>);
				}
		return;
    },
     wiki : function(wiki) {
     if(wiki==="A"){
		   return (<div className="col-sm-12 well">
				<h2>Internal</h2>
					<p> <h3>Access primarily to: Confluence wiki, our intranet. Mostly in Norwegian for now. 
						Indian part under construction. Also provides access to files.miles.no,
					    our download repository for Microsoft software.</h3>
						
						<div>Username: </div>
						<div>Password: </div>
					</p>
				</div>);
				}
		return;
    },
    mailFooter : function () {
    	return (<div className="col-sm-12  well">
    				<div className="col-sm-12"><h3>NB! Please change your passwords as soon as you gain access to the systems.</h3></div>
    				<div className="col-sm-12"><h3>If you need any help, do not hesitate to contact us by email or phone. Please use drift@miles.no.</h3></div>
    				<div className="col-sm-12"><h3>Again: Welcome to Miles!</h3></div>
    		</div>);
    }
};

module.exports =WelcomeMessage;


/*

welcomeNote : function(){
		return (<div className="col-sm-12">
	    			<h2>A Miles user has just been created for you in the following user stores:</h2> 
				</div>);
    	}
	

	googleApps : function() {
		return (<div className="col-sm-12">
		    		<h2>Google Apps</h2>
					
					<p> <h3>Access to: email (gmail), calendar, docs and contacts.</h3>
						
						<div>Username: </div>
						<div>Password: </div>
					</p>
		    	</div>
			);
	},
    git : function(git) {
    	if(git==="A"){
		    return (<div className="col-sm-12">
		    		<h2>GitHub</h2>
					<p> <h3>If you have a GitHub handle, please provide that at your convenience.</h3></p>
		    	</div>);
    	}
    	return ;
    },
    slack : function(slack) {

    	if(slack==="A"){
		   return (<div className="col-sm-12">
		    			<h2>Slack</h2> 
						<p><h3>Our internal chat forum. You have received a separate invitation in your Miles inbox. You set your own username and password.
 							Please use a descriptive username, like “firstnamelastname” or “firstname.lastname” so that others can easily recognise you on Slack.</h3></p>
		    		</div>);
				}
		return;
    },
    socialcast : function(socialcast) {
   if(socialcast==="A"){
		   return (<div className="col-sm-12">
				<h2>Socialcast</h2>
					<p> <h3>Our internal discussion forum, "Facebook style". You have a separate invitation in your Miles inbox.
							You authenticate with your primary Google account, i.e. your Miles email address.</h3>
					</p>
				</div>);
				}
		return;
    },
    trello : function(trello) {
    if(trello==="A"){
		   return (<div className="col-sm-12">
				<h2>Trello</h2>
					<p> <h3>Our cards based project collaboration tool. You have received a separate invitation in your Miles inbox.
							 That invite is for the Miles organisation. Please see  
							 <a href="https://wiki.miles.no/display/DRIFT/Trello+-+Add+new+users+to+the+Miles+organisation"> 
							 	https://wiki.miles.no/display/DRIFT/Trello+-+Add+new+users+to+the+Miles+organisation
							 </a> 
							 for instructions on how to sign up. (Invitations for specific boards will be done separately on demand.)
						</h3>
					</p>
				</div>);
				}
		return;
    },
    dropbox : function(dropbox) {
    if(dropbox==="A"){
		   return (<div className="col-sm-12">
				<h2>Dropbox Business</h2>
					<p> <h3>Our file server if you will. You have received a separate invitation in your Miles inbox.
					 		If you already have a Dropbox account, please see <a href="https://www.dropbox.com/business/two-dropboxes" title="https://www.dropbox.com/business/two-dropboxes">
					 			https://www.dropbox.com/business/two-dropboxes
					 		</a>
						</h3>
					</p>
				</div>);
				}
		return;
    },
     wiki : function(wiki) {
     if(wiki==="A"){
		   return (<div className="col-sm-12">
				<h2>Internal</h2>
					<p> <h3>Access primarily to: Confluence wiki, our intranet. Mostly in Norwegian for now. 
						Indian part under construction. Also provides access to files.miles.no,
					    our download repository for Microsoft software.</h3>
						
						<div>Username: </div>
						<div>Password: </div>
					</p>
				</div>);
				}
		return;
    },
    mailFooter : function () {
    	return (<div className="col-sm-12">
    				<div className="col-sm-12">NB! Please change your passwords as soon as you gain access to the systems.</div>
    				<div className="col-sm-12">If you need any help, do not hesitate to contact us by email or phone. Please use drift@miles.no.</div>
    				<div className="col-sm-12">Again: Welcome to Miles!</div>
    		</div>);
    }


NB! Please change your passwords as soon as you gain access to the systems.

If you need any help, do not hesitate to contact us by email or phone. Please use drift@miles.no.

Again: Welcome to Miles!*/