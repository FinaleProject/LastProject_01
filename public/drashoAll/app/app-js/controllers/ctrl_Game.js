app.controller('ctrl_Game',function($scope,$location,auth_service,$rootScope){

    console.log('ctrl_Game is ready...');

    if(!auth_service.isAuthenticated()){
    	$location.url('/login');
    }else{
    	$rootScope.$broadcast('user.logged')
    }
    
    
});