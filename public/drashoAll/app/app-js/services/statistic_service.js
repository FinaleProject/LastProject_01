app.factory('statistic_service',function($http){

    //var arr =   [
    //    {
    //        id: 1,
    //        username: 'user01',
    //        beastScore: '1205',
    //        level : 4,
    //        games: 15,
    //        position: 2
    //    },{
    //        id: 2,
    //        username: 'user02',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 3,
    //        username: 'user03',
    //        beastScore: '2503',
    //        level : 8,
    //        games: 45,
    //        position: 1
    //    },{
    //        id: 2,
    //        username: 'user04',
    //        beastScore: '905',
    //        level : 3,
    //        games: 18,
    //        position: 2
    //    },
    //    {
    //        id: 1,
    //        username: 'user05',
    //        beastScore: '905',
    //        level : 3,
    //        games: 18,
    //        position: 2
    //    },{
    //        id: 3,
    //        username: 'user06',
    //        beastScore: '905',
    //        level : 3,
    //        games: 18,
    //        position: 2
    //    },{
    //        id: 2,
    //        username: 'user07',
    //        beastScore: '905',
    //        level : 3,
    //        games: 18,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user08',
    //        beastScore: '1205',
    //        level : 4,
    //        games: 15,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user09',
    //        beastScore: '1205',
    //        level : 4,
    //        games: 15,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user10',
    //        beastScore: '1205',
    //        level : 4,
    //        games: 15,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user11',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user12',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user13',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 2,
    //        username: 'user14',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 3,
    //        username: 'user15',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user16',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 3,
    //        username: 'user17',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 1,
    //        username: 'user18',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        id: 2,
    //        username: 'user19',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user20',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user21',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user22',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user23',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user24',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user25',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user26',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user27',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user28',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user29',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user30',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user31',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user32',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user33',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user34',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user35',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user36',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },{
    //        username: 'user37',
    //        beastScore: '705',
    //        level : 6,
    //        games: 23,
    //        position: 2
    //    },
    //];

    return{
        getUsers: function(successCB){
            $http.get('/users')
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        },
        getUserById: function(id, successCB){
            $http.get('/users/' + id)
                .then(function(data,status,headers,config){
                    successCB(data,status);
                })
        }

    }
});