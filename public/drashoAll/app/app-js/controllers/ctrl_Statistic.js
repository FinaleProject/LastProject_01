+app.controller('ctrl_Statistic',function($scope,auth_service ,$location,statistic_service){

    console.log('ctrl_Statistic...');

    if(!auth_service.isAuthenticated()){
    	$location.url('/login');
    }
    
    
    
    var flagOrderScore = true;
    var flagOrderGames = true;
    var flagOrderStars = true;
  
    statistic_service.getUsers(function(reasponse){

        $scope.users = reasponse.data;

        console.log($scope.users);


        $scope.totalItems = $scope.users.length;

        console.log($scope.totalItems);
        $scope.currentPage = 1;


        $scope.pageChanged = function () {
            console.log( $scope.currentPage);
            $scope.nextPageUsers = ($scope.currentPage * 10) - 10;
            console.log($scope.nextPageUsers)
        };
    });

    
    
    
    


    $scope.orderByBestScore = function(){
    	console.log('sort score');
        if(flagOrderScore){
        	flagOrderScore = false;
            $scope.users.sort(incrementBestScore);
        }else{
        	flagOrderScore = true;
            $scope.users.sort(decrementBestScore);
        }

    };
    
    
    $scope.orderByGames = function(){
        console.log('sort games');
        if(flagOrderGames){
        	flagOrderGames = false;
            $scope.users.sort(incrementGames);
        }else{
        	flagOrderGames = true;
            $scope.users.sort(decrementGames);
        }

    };
    
    $scope.orderByStars = function() {
    	console.log('sort stars');
    	if(flagOrderStars){
    		flagOrderStars = false;
            $scope.users.sort(incrementStars);
        }else{
        	flagOrderStars = true;
            $scope.users.sort(decrementStars);
        }
	}
    
    
    function incrementBestScore(a,b) {
        return a.best_score - b.best_score;
    }
    function decrementBestScore(a,b) {
        return b.best_score - a.best_score;
    }
    
    
    function incrementGames(a,b) {
        return a.games_played - b.games_played;
    }
    function decrementGames(a,b) {
        return b.games_played - a.games_played;
    }
    
    
    
    function incrementStars(a,b) {
        return a.stars_collected - b.stars_collected;
    }
    function decrementStars(a,b) {
        return b.stars_collected - a.stars_collected;
    }
    
    
});