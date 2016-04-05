app.controller('ctrl_Register',function($scope,$location,auth_service){

    console.log('ctrl_Register is ready...');



    $scope.registerUser = function(user){
    	
            if(user.pass1 == user.pass2){
	            auth_service.register(user);

                $location.path('/home');
            }    

    }


});