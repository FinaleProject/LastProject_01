app.factory('userAcc_service',function($http){




    return{
        getUserByID: function(id, successCB){
            $http.get('/users/'+ id )
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        },
        addStars : function(requestObj,successCB){
        	$http.put('api/v1/userRaiting',requestObj)
        		.then(function(data,status,headers,config){
        				successCB(data,status)
        		})
    
        }


    };
});