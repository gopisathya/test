var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider){
    





    $urlRouterProvider.otherwise(function($injector)
      {
        var $state =$injector.get('$state');
        var $rootScope=$injector.get('$rootScope');
        if($rootScope.uname)
        {
          $state.go('dashboard');
        }
        else
        {
          $state.go('login');
        }
      })


     $stateProvider

         /*Login and Register start*/
        .state ('login', {

            url: '/',
            views: {
              'template': {
                templateUrl: 'AngularJS/view/template/login/login.html',
                controller: 'authCtrl',                
              }

            },
         })

         .state ('dashboard', {
           
                url: '/dashboard',
                 resolve :{
               authenticate: [ 'authFactory', function(authFactory){ return   authFactory.isAnonymous();}],
            },
            views: {
              'template': {
                templateUrl: 'AngularJS/view/template/dashboard.html',
                controller: 'authCtrl',                
              }
            
            }

            

           
            



 
         })
});