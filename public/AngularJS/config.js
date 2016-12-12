var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise(function($injector)
      {
        // var $state =$injector.get('$state');
        // var $rootScope=$injector.get('$rootScope');
        // if($rootScope.user_Firstname)
        // {
        //   $state.go('dashboard');
        // }
        // else
        // {
        //   $state.go('login');
        // }
      });
