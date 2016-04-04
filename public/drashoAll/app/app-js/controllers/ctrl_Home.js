app.controller('ctrl_Home',function($scope,identity_service,$location){

    console.log('ctrl_Home is ready...');


    //console.log(identity_service.isAuthenticated());

    $scope.getStarted = function(){
        if(identity_service.isAuthenticated()){
            $location.url('/mainPage');
        }else{
            $location.url('/login');

        }

    }

});