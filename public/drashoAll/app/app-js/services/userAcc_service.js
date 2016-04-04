app.factory('userAcc_service',function($http){




    return{
        getUserByID: function(id, successCB){
            $http.get('app-js/data/currentUser/'+ id + '.json')
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        }
    }


});