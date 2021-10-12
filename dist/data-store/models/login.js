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

