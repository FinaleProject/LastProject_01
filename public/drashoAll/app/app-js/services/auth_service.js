app.factory('auth_service',function($http, $q, $cookies, identity_service){

    var TOKEN_KEY = 'authentication'; // cookie key

    console.log('auth !!!!!')

    var register = function register(user){
    	console.log('sdasdas')
        var deferred = $q.defer();

        $http.post('/reg',user)
            .then(function(){
                deferred.resolve(true);
                console.log(user)
            },function(err){
                deferred.reject(err)
            })
    };

    var login = function login(user) {
        var deferred = $q.defer();
        console.log('reg service')
        var data = user


        $http.post('/reg', data)
            .success(function (response) {
                var tokenValue = response.access_token;  // tokena koito mi vru6ta api-to

                var theBigDay = new Date();
                theBigDay.setHours(theBigDay.getHours() + 72);

                $cookies.put(TOKEN_KEY, tokenValue, { expires: theBigDay });
                // save cookie

                $http.defaults.headers.common.Authorization = 'Bearer ' + tokenValue;
                // slagam ob6t header koito vseki put se izpra6ta

                getIdentity().then(function () {   // tuk vzimam sus zaqvka user-a
                    deferred.resolve(response);
                });
            })
            .error(function (err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    var getIdentity = function () {
        var deferred = $q.defer();

        $http.get('/api/users/identity')
            .success(function (identityResponse) {
                identity_service.setUser(identityResponse); // vzimame vsi4kite danni za user-a
                deferred.resolve(identityResponse);
            });

        return deferred.promise;
    };


    return {
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
