app.controller('ctrl_Home',function($scope,auth_service,$location){

    console.log('ctrl_Home is ready...');


    console.log(auth_service.isAuthenticated());

    $scope.getStarted = function(){
    		
        if(auth_service.isAuthenticated()){
            $location.url('/mainPage');
        }else{
            $location.url('/login');
        }

    }

});