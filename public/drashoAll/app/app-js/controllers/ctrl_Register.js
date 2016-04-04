app.controller('ctrl_Register',function($scope, $location, auth_service){

    console.log('ctrl_Register is ready...');

    console.log(auth_service);

    $scope.register = function(user, registerForm){
        if(registerForm.$valid){
            if(user.pass1 != user.pass2){
                $scope.flagPass = true;
            }else{
                $scope.flagPass = false;
                console.log(user);
                $location.path('/login');
            }

            //auth_service.register(user).then(function(){
            //    $location.path('/login');
            //})
        }
    }


});