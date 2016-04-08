app.controller('ctrl_MyAcc',function($scope,myAccount_service,auth_service){

    console.log('ctrl_MyAcc is ready...');

    
    $scope.myProfil = {};
    
    $scope.showEdit = false;
    $scope.showMsg = false;

    $scope.showEditForm = showEditForm;
    $scope.showMsgForm = showMsgForm;


    function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}
	
	
	var token = getCookie('authentication');
    
    
    auth_service.takeUser(token,function(responce){
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