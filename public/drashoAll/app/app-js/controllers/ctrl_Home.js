app.controller('ctrl_Home',function($scope,auth_service,$location,$rootScope){

    console.log('ctrl_Home is ready...');
    
    if(auth_service.isAuthenticated()){
        
        console.log('this is main page')
        $rootScope.$broadcast('user.logged')
    }
    	
    
    console.log(auth_service.isAuthenticated());

    $scope.getStarted = function(){
    		
        if(auth_service.isAuthenticated()){
            $location.url('/mainPage');
            console.log('this is main page')
            $rootScope.$broadcast('user.logged')
        }else{
            $location.url('/login');
        }

    }

});