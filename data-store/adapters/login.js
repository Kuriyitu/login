store.registerAdapter("login", {//No I18n
	buildURL : function(modelName , type ,payLoad, queryParams, url){
        
    	url= "http://localhost:8080/login/login";
       
        return url;


    }
   
});

