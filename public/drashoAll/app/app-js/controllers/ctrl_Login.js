app.controller('ctrl_Login',function($scope, $location,auth_service){

    console.log('ctrl_Login is ready...');



    $scope.loginUser = function(user){
        console.log(user);
    };


    $scope.loginUser = function(user){
        auth_service.login(user);
    }

});