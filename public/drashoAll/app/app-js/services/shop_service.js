app.factory('shop_service',function($http){


    

    return{
        getAllItems: function(successCB){
            $http.get('/shop')
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        },
        addItemToUser : function(data,successCB){
            $http.put('api/v1/shopBuy',data) //
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        }

    }
});
