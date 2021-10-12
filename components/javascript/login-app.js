Lyte.Component.register("login-app", {
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
