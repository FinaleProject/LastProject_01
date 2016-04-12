app.controller('ctrl_UserDetails',function($scope, $routeParams, $location,userAcc_service,auth_service,$rootScope){

    console.log('ctrl_UserDetails...');

    
    if(!auth_service.isAuthenticated()){
    	$location.url('/login');
    	return;
    }
    
    $rootScope.$broadcast('user.logged')
    
    $scope.showMsg = false;

    $scope.voteButton = false;
    
    
    console.log($routeParams.id);

    var id = $routeParams.id;
    
    
    auth_service.getUser(function(response){
    	var currentUser = response.data;
    	console.log(currentUser);
    	
    	if($routeParams.id == currentUser.id){
    		$location.url('/myAccount');
    	}
    	
    	
    	var allRatedUsersStr = currentUser.has_rated;
    	
    	var allRatedUsersArr = allRatedUsersStr.split(' ');
    	
    	console.log(allRatedUsersArr);
    	
    	for(var i = 0; i < allRatedUsersArr.length; i++){
    		
    		if(allRatedUsersArr[i] == id){
    			console.log(allRatedUsersArr[i],id)
    			$scope.voteButton = true;
    		}
    		
    	}
    	
    })
    
    
    


    function showEditForm(){

        if(!$scope.showEdit){
            $scope.showEdit = true;
        }else{
            $scope.showEdit = false;
        }

    }

    
    userAcc_service.getUserByID(id,function(data){
        console.log(data.data);
        $scope.user = data.data;
    })

    

    
    $scope.addStarsToUser = function(){
    	$scope.starsPanel = false;
    	console.log(id,$scope.stars)
    	 $scope.voteButton = true;
    	var token = auth_service.isAuthenticated()
    	 	console.log(token);
    	userAcc_service.addStars({id: id,token:token,stars:$scope.stars},function(data,status){
    		
        	console.log(data);
        })
    }
    
    



});