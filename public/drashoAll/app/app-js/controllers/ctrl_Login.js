app.controller('ctrl_Login',function($scope, $location,auth_service){

    console.log('ctrl_Login is ready...');

    $scope.isLoggedUser = false;
    auth_service.logout();

    $scope.loginUser = function(user){
   
        auth_service.login(user)
    }
    
});