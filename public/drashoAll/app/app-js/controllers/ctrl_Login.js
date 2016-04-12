app.controller('ctrl_Login',function($scope, $location,auth_service,$cookies,$http,$rootScope){

    console.log('ctrl_Login is ready...');

    
    auth_service.logout();

    $scope.isLoggedUser = false;
    $scope.invlidInput = false;
    
    
    $scope.loginUser = function(user){
    	
    	var TOKEN_KEY = 'authentication';
    	
    	auth_service.login(user,function(response){
    		console.log(response);
    		
    		$scope.invlidInput = false;
    		if(response.data == "User not found!"){
    			$scope.invlidInput = true;
    			console.log('Nema user')
    		}else{
    			console.log('Ima user')
    			var tokenValue = response.data.api_token;  // tokena koito mi vru6ta api-to
                
                var theBigDay = new Date();
                theBigDay.setHours(theBigDay.getHours() + 72);

                $cookies.put(TOKEN_KEY, tokenValue, { expires: theBigDay });
                // save cookie
             
                $http.defaults.headers.common.Authorization = 'X-Api-Token ' + tokenValue;
                // slagam ob6t header koito vseki put se izpra6ta

                $rootScope.$broadcast('user.logged')
                
                
                $location.path('/mainPage');
    		}
    		
    		
    		
    		    		
    	})
    	
    }
    
    

    
});