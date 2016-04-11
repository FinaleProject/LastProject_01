app.factory('statistic_service',function($http){
   
    return{
		getUsers: function(successCB){
		    $http.get('/users')
		        .then(function(data,status,headers,config){
		        	console.log(data)
		            successCB(data,status);
		        })
	},
    	
    }

});