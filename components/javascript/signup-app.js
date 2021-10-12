Lyte.Component.register("signup-app", {
	data : function(){
		return {
			emailId : Lyte.attr( "string" ),
      		password : Lyte.attr( "string" )
			
		}		
	},
	actions : 
	{
		submit : function(obj)
		 {
				var emailid=this.getData("emailId");
				var pass=this.getData("password")
	
				store.findAll( "login").then( function(){
				
								if(store.peekRecord( "login" , emailid)== undefined)
								{	
									store.createRecord( "login" ,{ emailId : emailid , password : pass ,id :emailid});

										 var record = store.peekRecord( "login" , emailid );
										record.$.save();	
										console.log(store.peekAll("login"));	
										var r = confirm("signed up successfully  go to login page? ");
										if (r == true)
											Lyte.Router.transitionTo('login');
								
								}
								else
									alert("id exist");

				}
				);			
						}
					}

});
