app.controller('ctrl_Shop',function($scope, $location, shop_service, identity_service,auth_service){

    console.log('ctrl_Shop is ready...');

    $scope.user ={};
    $scope.msg = '';
    $scope.flag = true;
    
    
	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}
	
	
	var token = getCookie('authentication');
    
    
    auth_service.takeUser(token,function(respose){
    	$scope.user = respose.data;
    	console.log($scope.user);
    })
    
    
    
    $scope.items = [];
    shop_service.getAllItems(function(response){
    	
    	$scope.items = response.data;
    	console.log($scope.items);
    

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