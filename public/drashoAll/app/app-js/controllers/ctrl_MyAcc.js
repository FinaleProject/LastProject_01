app.controller('ctrl_MyAcc',function($scope,identity_service ,myAccount_service){

    console.log('ctrl_MyAcc is ready...');

    $scope.showEdit = false;
    $scope.showMsg = false;

    $scope.showEditForm = showEditForm;
    $scope.showMsgForm = showMsgForm;


    $scope.myProfil = identity_service.getUser().$$state.value;


    $scope.saveEditUser = function(editUser, editForm){
        console.log($scope.myProfil);

        $scope.myProfil.name  = editUser.name;
        $scope.myProfil.email = editUser.email;


        console.log(editUser);

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