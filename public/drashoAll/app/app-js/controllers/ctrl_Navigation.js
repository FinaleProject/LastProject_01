app.controller('ctrl_Navigation',function($scope,$location,myAccount_service,auth_service){

    console.log('ctrl_Navigation is ready...');

    
//    <li ng-show='isLoggedUser'><a href="#/myAccount">{{loggedUserName}}</a></li>
//    <li ng-hide='isLoggedUser'><a href="#/login">Sign in/ Sign up</a></li>
//    <li ng-show='isLoggedUser'><a href="#/login">Logout</a></li>
    
    
    $scope.currentLoggedUser = {};
    console.log($scope.currentLoggedUser)
    $scope.loggedUserName = '';
    
    $scope.isLoggedUser = false;
    
    
    $scope.$on('user.logged',function(){
    	console.log('triggered event')
    	
    	auth_service.getUser(function (response) {
    		$scope.currentLoggedUser = response.data
    		console.log($scope.currentLoggedUser)
    		$scope.loggedUserName = $scope.currentLoggedUser.name;
		})
    	
    	$scope.isLoggedUser = true;
    	
    })
    
    
    $scope.$on('user.logout', function() {
    	console.log('logout event event')
    	$scope.isLoggedUser = false;
	})




});