app.controller('ctrl_Game',function($scope,$location,auth_service){

    console.log('ctrl_Game is ready...');

    if(!auth_service.isAuthenticated()){
    	$location.url('/login');
    }
    
    
});