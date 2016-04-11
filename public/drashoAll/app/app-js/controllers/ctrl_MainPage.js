app.controller('ctrl_MainPage',function($location,auth_service,$rootScope){

    console.log('ctrl_MainPage is ready...');

    if(!auth_service.isAuthenticated()){
    	$location.url('/login');
    }else{
    	$rootScope.$broadcast('user.logged')
    }
    
    
});