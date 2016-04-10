var app = angular.module('app',
    [
    'ngRoute',
    'ngCookies',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination'
    ])
   .filter('startFrom', function(){
       return function (data, start){
           console.log('OPA OPA')
           if(!data){
               return;
           }
           return data.slice(start)
       }
    })


app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'drashoAll/app/views/view_Home.html',
        controller : 'ctrl_Home'
    });
    $routeProvider.when('/home', {
        templateUrl: 'drashoAll/app/views/view_Home.html',
        controller : 'ctrl_Home'
    });
    $routeProvider.when('/mainPage', {
        templateUrl: 'drashoAll/app/views/view_MainPage.html',
        controller : 'ctrl_MainPage'
    });
    $routeProvider.when('/users/:id', {
        templateUrl: 'drashoAll/app/views/view_userAcc.html',
        controller : 'ctrl_UserDetails'
    });
    $routeProvider.when('/login', {
        templateUrl: 'drashoAll/app/views/view_Login.html',
        controller : 'ctrl_Login'
    });
    $routeProvider.when('/register', {
        templateUrl: 'drashoAll/app/views/view_Register.html',
        controller : 'ctrl_Register'
    });
    $routeProvider.when('/shop', {
        templateUrl: 'drashoAll/app/views/view_Shop.html',
        controller : 'ctrl_Shop'
    });
    $routeProvider.when('/myAccount', {
        templateUrl: 'drashoAll/app/views/view_MyAcc.html',
        controller : 'ctrl_MyAcc'
    });
    $routeProvider.when('/game', {
            templateUrl: 'drashoAll/app/views/view_Game.html',
            controller : 'ctrl_Game'
    });
    $routeProvider.when('/statistic', {
        templateUrl: 'drashoAll/app/views/view_Statistic.html',
        controller : 'ctrl_Statistic'
    })

    .otherwise({redirectTo: '/home'})

});