app.controller('authCtrl', ['$scope','$location','$state','$rootScope', function ($scope,$location,$state,$rootScope) {
	$scope.submit = function(){
		$rootScope.uname = $scope.username;
		$rootScope.password =  $scope.password;
		if($scope.username =='admin' && $scope.password == 'pass'){
			$rootScope.uname = $scope.username;
		$rootScope.password =  $scope.password;
		   $rootScope.loggedIn = true;
		   alert($rootScope.loggedIn);
		   $state.go('dashboard');

		}else{
			alert("Wrongly Entered");
		}
	}


  
}])