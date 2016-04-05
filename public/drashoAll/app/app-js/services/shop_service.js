app.factory('shop_service',function($http){


    

    return{
        getAllItems: function(successCB){
            $http.get('/shop')
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        },
        addItemToUser : function(data,successCB){
            $http.put(data,'user/update') //
                .then(function(data,status,headers,config){
                    successCB(status);
                })
        }

    }
});
