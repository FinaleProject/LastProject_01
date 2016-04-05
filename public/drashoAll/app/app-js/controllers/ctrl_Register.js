app.controller('ctrl_Register',function($scope,auth_service){

    console.log('ctrl_Register is ready...');

    //console.log(auth_service);

    $scope.registerUser = function(user){
    	
            if(user.pass1 == user.pass2){
            	
             
	            auth_service.register(user)
            }    
         
          
        
    }


});