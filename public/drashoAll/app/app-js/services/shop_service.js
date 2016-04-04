app.factory('shop_service',function($http){


    var items = [
        {
            picture: 1,
            price: 4580,
            rank : 20,
            level: 5
        },{
            picture: 11,
            price: 4250,
            rank : 25,
            level: 5
        },{
            picture: 3,
            price: 3900,
            rank : 26,
            level: 5
        },{
            picture: 4,
            price: 3650,
            rank : 25,
            level: 5
        },{
            picture: 5,
            price: 3550,
            rank : 30,
            level: 5
        },{
            picture: 6,
            price: 3000,
            rank : 31,
            level: 5
        },{
            picture: 7,
            price: 2500,
            rank : 32,
            level: 5
        },{
            picture: 8,
            price: 1200,
            rank : 33,
            level: 5
        },{
            picture: 9,
            price: 2000,
            rank : 34,
            level: 5
        },{
            picture: 10,
            price: 4587,
            rank : 35,
            level: 5
        },{
            picture: 11,
            price: 4587,
            rank : 36,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 37,
            level: 5
        },{
            picture: 13,
            price: 4587,
            rank : 38,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 13,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 9,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 2,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 11,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 4,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 14,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 14,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 14,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 14,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 14,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 14,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 1,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 3,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 6,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 7,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 12,
            price: 4587,
            rank : 20,
            level: 5
        },{
            picture: 14,
            price: 4587,
            rank : 20,
            level: 5
        },
    ];


    return{
        getAllItems: function(successCB){
            $http.get('app-js/data/allItems')
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
