app.controller('ctrl_MyAcc',function($scope,$location,myAccount_service,auth_service,$rootScope){

    console.log('ctrl_MyAcc is ready...');

    if(!auth_service.isAuthenticated()){
    	$location.url('/login')
    	return;
    }
    $rootScope.$broadcast('user.logged')
    
    $scope.flagPass = false;
    $scope.myProfil = {};
    
    $scope.showEdit = false;
    

    $scope.showEditForm = showEditForm;
    $scope.showMsgForm = showMsgForm;
    
    auth_service.getUser(function(responce){
    	 console.log(responce)
    	 $scope.myProfil = responce.data
    })


    $scope.saveEditUser = function(editUser){
        console.log($scope.myProfil);

        $scope.myProfil.name  = editUser.name;
        $scope.myProfil.email = editUser.email;
        
        editUser.token = auth_service.isAuthenticated();
        
        if(editUser.password != editUser.password2){
        	$scope.flagPass = true;
        	return;
        }
        $scope.flagPass = false;
        myAccount_service.updateUser(editUser,function(data){
        	console.log(data);
        	
        	
        	
        	if(data.status == 200){
        		$scope.showEdit = false;
        	}
        })
        

    };


    $scope.removeUser = function(){
    	console.log('clock delete')
    
    	auth_service.deleteUser(function(data) {
			console.log(data);
			$location.url('/login');
		})
    }

    function showMsgForm(){
        if(!$scope.showMsg){
            $scope.showMsg = true;
        }else{
            $scope.showMsg = false;
        }
    }
    function showEditForm(){

        if(!$scope.showEdit){
            $scope.showEdit = true;
        }else{
            $scope.showEdit = false;
        }

    }

});