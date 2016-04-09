app.controller('ctrl_UserDetails',function($scope, $routeParams, userAcc_service){

    console.log('ctrl_UserDetails...');


    $scope.showMsg = false;

    $scope.showMsgForm = showMsgForm;




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

    console.log($routeParams.id);

    var id = $routeParams.id;
    userAcc_service.getUserByID(id,function(data){
        console.log(data.data);
        $scope.user = data.data;
    })

    

    function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}
	
	
	var token = getCookie('authentication');
    
    $scope.addStarsToUser = function(){
    	 console.log(id,token,$scope.stars)
    	 	
    	userAcc_service.addStars({id: id,token:token,stars:$scope.stars},function(data,status){
        	console.log(status);
        	console.log(data);
        })
    }
    
    



});