app.factory('auth_service',function($http, $q, $cookies, $location, $rootScope){

    var TOKEN_KEY = 'authentication'; // cookie key

    console.log('auth !!!!!');
    
    
    
    var register = function register(user){
    	
        var deferred = $q.defer();

        $http.post('/api/v1/register',user)
            .then(function(response){
                deferred.resolve(true);
                console.log(response)
                
                var tokenValue = response.data.api_token;  // tokena koito mi vru6ta api-to
                
                console.log(tokenValue)                
                
                var theBigDay = new Date();
                theBigDay.setHours(theBigDay.getHours() + 72);

                $cookies.put(TOKEN_KEY, tokenValue, { expires: theBigDay });
                // save cookie

                $http.defaults.headers.common.Authorization = 'X-Api-Token ' + tokenValue;
                // slagam ob6t header koito vseki put se izpra6ta
                $rootScope.$broadcast('user.logged')
                $location.url('/home')
                
            },function(err){
            	
                deferred.reject(err)
            })
    };

    
    
    
    var login = function login(user,successCB) {		
    	$http.post('/api/v1/login', user)
    		.then(function(data,status,headers,config){
    		successCB(data,status)
    	})
	}    
    
       

    function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}
    
    
    
    
    var	getUser = function getUser(successCB){
    	var token = getCookie('authentication');
    		
	    	$http.post('api/v1/getUser', {"token": token})
	        .then(function(data,status,headers,config){
	            successCB(data,status);
	        })
		}
	
    var	deleteUser = function deleteUser(successCB){
    	var token = getCookie('authentication');
    		
	    	$http.post('api/v1/userRemoving', {"token": token})
	        .then(function(data,status,headers,config){
	            successCB(data,status);
	        })
		}
	
    
    
    var isAuthenticated = function(){
    	var token = getCookie('authentication');
    	console.log(token)
    	return token;
    }
   
    

    return {
    	isAuthenticated : isAuthenticated,
    	getUser: getUser,
        register: register, // tuk se podava user
        login: login,
        deleteUser: deleteUser,
        logout: function () {
        	$rootScope.$broadcast('user.logout')
        	console.log('LOGOUT ! ! ! ')
            $cookies.remove(TOKEN_KEY);   // iztrivame cookie - to
            $http.defaults.headers.common.Authorization = null; // iztrivame header-a
        }
    };

});
