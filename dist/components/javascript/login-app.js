Lyte.Component.register("login-app", {
_template:"<template tag-name=\"login-app\"> <div>login-app</div> ID: <input type=\"text\" name=\"id\" value=\"{{lbind(id)}}\"> password: <input type=\"text\" name=\"password\" value=\"{{lbind(password)}}\"> <button onclick=\"{{action(submit,this)}}\"> Submit </button> <input type=\"button\" onclick=\"location.href='#signup'\" value=\"signup\"> </template>",
_dynamicNodes: [{"type":"attr","position":[3]},{"type":"attr","position":[5]},{"type":"attr","position":[7]}],
_observedAttributes :["id","password"],
	data : function(){
		return {
			id : Lyte.attr( "string" ),
      		password : Lyte.attr( "string" )
		}		
	},
	actions :
	 {
		submit : function(obj) 
		{

			var i=this.getData("id");
			var pass=this.getData("password")
			store.findAll( "login").then( function(){
			var data=store.peekRecord("login",i);
			if (data!=undefined && pass==data.password )
				alert("loged in")	
			else
			{
				var r = confirm(" cannot find id go to signup");
				if (r == true) 
					Lyte.Router.transitionTo('signup');
			}
		});
		}
		
	}
});
