+app.controller('ctrl_Statistic',function($scope,statistic_service){

    console.log('ctrl_Statistic...');


    var flagOrder = true;

   
  
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



    $scope.orderByPosition = function(){
        console.log('tuk');
        if(flagOrder){
            flagOrder = false;
            $scope.users.sort(compare);
        }else{
            flagOrder = true;
            $scope.users.sort(compare2);
        }

    };
    function compare(a,b) {
        return a.rank - b.rank;
    }

    function compare2(a,b) {
        return b.rank - a.rank;
    }

});