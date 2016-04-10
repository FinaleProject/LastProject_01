app.controller('ctrl_MyAcc',function($scope,$location,myAccount_service,auth_service){

    console.log('ctrl_MyAcc is ready...');

    if(!auth_service.isAuthenticated()){
    	$location.url('/login')
    }
    
    
    
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

        editUser.token = token;
        
        
        myAccount_service.updateUser(editUser,function(data, status){
        	console.log(data);
        	console.log(status);
        })

    };




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