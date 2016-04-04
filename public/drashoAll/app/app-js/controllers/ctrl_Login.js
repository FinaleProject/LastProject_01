app.controller('ctrl_Login',function($scope, $location,auth_service){

    console.log('ctrl_Login is ready...');



    $scope.singUpUser = function(user){
        console.log(user);
    };


    //$scope.login = function(user, loginForm){
    //    if(loginForm.$valid){
    //        auth_service.login(user).then(function(){
    //            $location.path('/home');
    //        })
    //    }
    //}

});