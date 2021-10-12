// Lyte.Router.configureDefaults({baseURL:'',history : "html5"});

Lyte.Router.configureRoutes(function(){
	this.route('index',{path:'/'});
	this.route("login",{ path :"/login"});
	this.route("signup",{ path :"/signup"});
});

Lyte.Router.beforeRouteTransition = function() {
	//console.log('before Route Change');
}

Lyte.Router.afterRouteTransition = function() {
	//console.log('after Route Change');
}


Lyte.Router.registerRoute('index',{
	// model : function()	{
	// 	return {features : [{module : 'Router',url : 'http://lyte/2.0/doc/route/introduction'},
	// 						{module : 'Components',url : 'http://lyte/2.0/doc/components/introduction'},
	// 						{module : 'Data',url : 'http://lyte/2.0/doc/data/introduction'},
	// 						{module : 'CLI',url : 'http://lyte/2.0/doc/cli/introduction'}
	// 						]}
				
	// }

	afterRender  : function (){ 
    this.transitionTo('login');
}
	
});

Lyte.Router.registerRoute("login",{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
// renderTemplate  : function (model, paramsObject ){ 
//         /* return where and what to render.(container and component/HTML) */
// },
renderTemplate : function()	{
    return {outlet : '#outlet',component:'login-app'}//No I18n
},
// afterRender  : function (model, paramsObject ){ 
//         /* Post processing of rendered page. */
// },
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
// didDestroy  : function (model, paramsObject ){ 
//         /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
// },
// actions  : { 
//        onBeforeLoad  : function (paramsObject ){ 
//                 /* Triggered once route transition starts. */
//         },
//        onError  : function (error, pausedTrans, paramsObject ){ 
//                 /* Triggered by error on file load or on data request. */
//         },
//        willTransition  : function (transition ){ 
//                 /* Triggered before a transition is going to change. */
//         },
//        didTransition  : function (paramsObject ){ 
//                 /* Triggered after completion of transition. */
//         },
// }
});

Lyte.Router.registerRoute("signup",{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
// renderTemplate  : function (model, paramsObject ){ 
//         /* return where and what to render.(container and component/HTML) */
// },
renderTemplate : function()	{
    return {outlet : "#outlet",component : "signup-app"}
},
// afterRender  : function (){ 
//     this.transitionTo('login');
// }
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
// didDestroy  : function (model, paramsObject ){ 
//         /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
// },
// "on-callCreate" : function(){
//     var trans = this.transitionTo( 'login' );
//     trans.refresh = true;
// },
actions  : { 
       onBeforeLoad  : function (paramsObject ){ 
                /* Triggered once route transition starts. */
        },
       onError  : function (error, pausedTrans, paramsObject ){ 
                /* Triggered by error on file load or on data request. */
        },
       willTransition  : function (transition ){ 
                /* Triggered before a transition is going to change. */
        },
       didTransition  : function (paramsObject ){ 
          //  this.transitionTo('login');
        },
}
});

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

Lyte.Component.register("signup-app", {
_template:"<template tag-name=\"signup-app\"> <div>signup-app</div><br> ID: <input type=\"text\" name=\"id\" value=\"{{lbind(emailId)}}\"> password: <input type=\"text\" name=\"password\" value=\"{{lbind(password)}}\"> <button onclick=\"{{action(submit,this)}}\"> Submit </button><br> <input type=\"button\" onclick=\"location.href='#login'\" value=\"login\"> </template>",
_dynamicNodes: [{"type":"attr","position":[4]},{"type":"attr","position":[6]},{"type":"attr","position":[8]}],
_observedAttributes :["emailId","password"],
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

Lyte.Component.register("welcome-comp",{
_template:"<template tag-name=\"welcome-comp\"> <h1>Available features of LYTE</h1> <ul> <template is=\"for\" items=\"{{features}}\" item=\"item\" index=\"index\"> <li><a href=\"{{item.url}}\" target=\"_blank\">{{item.module}}</a></li> </template> </ul> </template>",
_dynamicNodes : [{"type":"attr","position":[3,1]},{"type":"for","position":[3,1],"dynamicNodes":[{"type":"attr","position":[1,0]},{"type":"text","position":[1,0,0]}]}],
_observedAttributes :["features"],
	data : function(){
		return {
			features : Lyte.attr("array")
		}
	}
});

store.registerModel("login",{
    
    password : Lyte.attr( "string" ),
    emailId : Lyte.attr( "string" )

});

store.registerAdapter("login", {//No I18n
	buildURL : function(modelName , type ,payLoad, queryParams, url){
        
    	url= "http://localhost:8080/login/login";
       
        return url;


    }
   
});

