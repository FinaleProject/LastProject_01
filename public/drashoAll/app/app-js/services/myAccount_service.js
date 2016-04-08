app.factory('myAccount_service',function($http){

	return{
		updateUser : function(user, successCB){
			$http.put('api/v1/editProfile', user)
				.then(function(data,status,headers,config){
					successCB(data,status);
			})
		}
	}
	
	
});