app.controller('ctrl_Shop',function($scope, $location, shop_service, identity_service,auth_service){

    console.log('ctrl_Shop is ready...');

    $scope.user ={};
    

	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}
	
	
	var token = getCookie('authentication');
    
    
    auth_service.takeUser(token,function(respose){
    	$scope.user = respose;
    	console.log($scope.user);
    })
    
    
    
    $scope.items = [];
    shop_service.getAllItems(function(response){
    	
    	$scope.items = response.data;
    	console.log($scope.items);
    

    });

    $scope.selectedItem = function(item){
        $scope.flag = true;
        console.log($scope.user.money, item.price);
        if($scope.user.money >= item.price && $scope.user.rank <= item.rank && $scope.user.level >= item.level){
            $scope.msg = "You can buy this picture only for $" + item.price;
            $scope.flag = false;

        }else if($scope.user.level < item.level){
            $scope.msg = "To low level, you need to be level: " + item.level;
            $scope.flag = true;
        }else if($scope.user.rank > item.rank){
            $scope.msg = "To low rank, you need to be rank: " + item.rank;
            $scope.flag = true;
        }else {
            $scope.msg = "Not enough money, you can need $" + item.price;
            $scope.flag = true;
        }
        $scope.wanted = item;
    };


    $scope.buyItem = function(item){

        $scope.user.picture = item.picture;
        $scope.user.money  -= item.price;
            // make put request to server !!!
            // on success
        identity_service.addItemToUser($scope.user,function(status){
            console.log(status)
        });


    };

// shtoto ne iskashe da kachi v gitaaaaaaaaaaaaaaaaaaa!

    
    $scope.allItems = $scope.items.length;
    console.log("asdasdasdasd");
    $scope.currentPage = 1;


    $scope.pageChanged = function () {

        $scope.nextPageUsers = ($scope.currentPage * 10) - 10;

    };
});