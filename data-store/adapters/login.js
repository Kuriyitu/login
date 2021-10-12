store.registerAdapter("login", {//No I18n
	buildURL : function(modelName , type ,payLoad, queryParams, url){
        // if (type=="create")
        // {
        //     url= "http://localhost:8080/first/First";
        //     console.log("creat")
        //     return url;
        // }
    	url= "http://localhost:8080/first/First";
       
         console.log(modelName);
     console.log(type);
     
         console.log(queryParams);
        return url;

    }
   
});

