app.controller('ctrl_Register',function($scope,$location,auth_service){

    console.log('ctrl_Register is ready...');

    $scope.flagPass = false;

    $scope.registerUser = function(user){
    		console.log(user)
            if(user.password == user.password2){
            	
	            auth_service.register(user);
	            $scope.flagPass = false;
            }else{
            	console.log('invalid passs')
            	$scope.flagPass = true;
            }    

    }


});