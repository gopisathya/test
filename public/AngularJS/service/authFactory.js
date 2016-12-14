app.factory('authFactory',function ($http,$q,$rootScope,$state,$location,redirectToUrlAfterLogin) {
return{
isAnonymous:function()
   { 
   	alert("gopi")
var get=$http.get('/isAuthenticated').then(function(response)
       {
					redirectToUrlAfterLogin.url=$location.path();
                    console.log("ggg"+JSON.stringify($rootScope.loggedIn));
                     if(!response.data.Authenticated)
						{   
						return response;
						}
						else 
						{        
						return  $q.reject("dashboard");
						}

	})
	console.log("isAuthenticated get::"+JSON.stringify(get));
       return get;
   }

}

});