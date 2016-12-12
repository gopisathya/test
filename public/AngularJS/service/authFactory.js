app.factory('authFactory',function ($http,$q,$rootScope,$state,$location,redirectToUrlAfterLogin) {
return{
 isAuthenticated:function()
   { 
   	alert("gopi")


                    console.log("ggg"+JSON.stringify($rootScope.loggedIn),null,2);
                    if($rootScope.loggedIn  == true ){
                        $state.go('dashboard');
                    }else{
                    		$state.go('dashboard');
                    }   
}

}

});