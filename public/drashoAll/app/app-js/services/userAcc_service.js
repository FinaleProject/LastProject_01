app.factory('userAcc_service',function($http){




    return{
        getUserByID: function(id, successCB){
            $http.get('/users/'+ id )
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        }
    }


});