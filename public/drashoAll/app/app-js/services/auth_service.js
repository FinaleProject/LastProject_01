app.factory('auth_service',function($http, $q, $cookies, identity_service){

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
                
                
            },function(err){
                deferred.reject(err)
            })
    };

    var login = function login(user) {
        var deferred = $q.defer();
        console.log('reg service');


        $http.post('/api/v1/login', user)
            .success(function (response) {
                var tokenValue = response.api_token;  // tokena koito mi vru6ta api-to
                
                
                console.log(tokenValue)
                
                
                var theBigDay = new Date();
                theBigDay.setHours(theBigDay.getHours() + 72);

                $cookies.put(TOKEN_KEY, tokenValue, { expires: theBigDay });
                // save cookie

                $http.defaults.headers.common.Authorization = 'X-Api-Token ' + tokenValue;
                // slagam ob6t header koito vseki put se izpra6ta

                getIdentity().then(function () {   // tuk vzimam sus zaqvka user-a
                    deferred.resolve(response);
                });
            })
            .error(function (err) {
            	console.log('ima gre6ka')
                deferred.reject(err);
            });

        return deferred.promise;
    };

    var getIdentity = function () {
        var deferred = $q.defer();

        $http.post('/api/v1/login')
            .success(function (identityResponse) {
                identity_service.setUser(identityResponse); // vzimame vsi4kite danni za user-a
                deferred.resolve(identityResponse);
            });

        return deferred.promise;
    };

    
    
    var	takeUser = function takeUser(token,successCB){
	    	$http.post('api/v1/getUser', {"token": token})
	        .then(function(data,status,headers,config){
	            successCB(data,status);
	        })
		}
	
	
    
    
    

    return {
    	takeUser:takeUser,
        register: register, // tuk se podava user
        login: login,
        getIdentity: getIdentity,
        isAuthenticated: function () {
            return !!$cookies.get(TOKEN_KEY);
        },
        logout: function () {
            $cookies.remove(TOKEN_KEY);   // iztrivame cookie - to
            $http.defaults.headers.common.Authorization = null; // iztrivame header-a
            identity_service.removeUser(); // currentUser = {};
        }
    };

});
