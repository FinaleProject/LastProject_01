app.controller('ctrl_Shop',function($scope, $location, shop_service, auth_service, $rootScope){

    console.log('ctrl_Shop is ready...');

    if(!auth_service.isAuthenticated()){
    	$location.url('/login');
    	return;
    }
    
    $rootScope.$broadcast('user.logged')
    
    $scope.user ={};
    $scope.msg = '';
    $scope.flag = true;
    
    

    
    auth_service.getUser(function(respose){
    	$scope.user = respose.data;
    	console.log($scope.user);
    })
    
    
    
    $scope.items = [];
    shop_service.getAllItems(function(response){
    	
    	$scope.items = response.data;
    	console.log($scope.items);
    
    	$scope.allItems = $scope.items.length;
    	
    	
    	$scope.currentPage = 1;
        

        $scope.pageChanged = function () {
            console.log( $scope.currentPage);
            $scope.nextPageUsers = ($scope.currentPage * 6) - 6;
            console.log($scope.nextPageUsers)
        };
    	
    	
    	
    });
    
    

    $scope.selectedItem = function(item){
        $scope.flag = true;
        console.log(item)
        
        item.item_price = Number(item.item_price);
        console.log($scope.user)
        console.log($scope.user.points, item.item_price);
        
        
        if($scope.user.points >= item.item_price){
        	console.log('ima pari')
            $scope.msg = "You can buy this picture only for $" + item.item_price;
            $scope.flag = false;

        }else if($scope.user.points < item.item_price){
        	console.log('ima pari')
        	$scope.msg = "You have not enough money";
        	$scope.flag = true;
        }
        $scope.wanted = item;
    };


    $scope.buyItem = function(item){

        //$scope.user.picture_number  = item.picture_number;
        $scope.user.points  -= item.item_price;
        console.log(item)
        console.log($scope.user)
        console.log($scope.user.points)
         $scope.user.points += '';
        
        
        var request = {
        			token  : $scope.user.api_token, 
        			points : $scope.user.points, 
        			picture: item.picture_number
        		}
       
        
        shop_service.addItemToUser(request,function(response){
        	console.log(response);
        })

    };



    
    $scope.allItems = $scope.items.length;
    console.log("asdasdasdasd");
    $scope.currentPage = 1;


    $scope.pageChanged = function () {

        $scope.nextPageUsers = ($scope.currentPage * 10) - 10;

    };
    
});