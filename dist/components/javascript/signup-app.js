Lyte.Component.register("signup-app", {
_template:"<template tag-name=\"signup-app\"> <div>signup-app</div><br> ID: <input type=\"text\" name=\"id\" value=\"{{lbind(emailId)}}\"> password: <input type=\"text\" name=\"password\" value=\"{{lbind(password)}}\"> <button onclick=\"{{action(submit,this)}}\"> Submit </button><br> <input type=\"button\" onclick=\"location.href='#login'\" value=\"login\"> </template>",
_dynamicNodes: [{"type":"attr","position":[4]},{"type":"attr","position":[6]},{"type":"attr","position":[8]}],
_observedAttributes :["emailId","password"],
	data : function(){
		return {
			emailId : Lyte.attr( "string" ),
      		password : Lyte.attr( "string" )
			//userName : Lyte.attr("string")
		}		
	},
	actions : 
	{
		submit : function(obj)
		 {
				var emailid=this.getData("emailId");
				var pass=this.getData("password")
				//var uname=this.getData("username");
				store.findAll( "login").then( function(){
					debugger
					console.log(store.peekAll("login"))
								if(store.peekRecord( "login" , emailid)== undefined)
								{	
									store.createRecord( "login" ,{  password : pass ,id :emailid});
									// store.createRecord( "login" ,{ emailId : "89" , password : "pass" ,userName: u});

									// store.create( "login" ).then( function(){		
										debugger
										 var record = store.peekRecord( "login" , emailid );
										record.$.save();	
										console.log(store.peekAll("login"));	
										var r = confirm("signed up successfully  go to login page? ");
										if (r == true)
											Lyte.Router.transitionTo('login');
								//	});
								}
								else
									alert("id exist");

				}
				);			
						}
					}

});
