<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'ContollerPageNavigation@navigateToHome');

Route::get('reg', 'ContollerPageNavigation@saveUser');

Route::get('reg/{token}', 'ContollerPageNavigation@navigateToToken');

Route::get('choices', 'ContollerPageNavigation@navigateToChoices');

Route::get('users', 'UserController@showUsers');

Route::get('users/{user_id}', 'UserController@showUser');


Route::get('shop', 'UserController@showAllItems');

Route::group([
		'prefix' => 'api/v1',
		'middleware' => 'api',
		'namespace' => 'Api'
	], function () {
		Route::post('/login', 'AuthController@login');
		Route::post('/register', 'AuthController@registration');
		Route::put('/pointsUpdate', 'AuthController@updatePoints');
		Route::put('/shopBuy', 'AuthController@payPoints');
		Route::put('/editProfile', 'AuthController@editProfile');
		Route::post('/getUser', 'AuthController@getUser');
		
		Route::group(['middleware' => 'api.auth'], function () {
			Route::get('token_test', function (){
				return Auth::user();
			});
		});
	} );



// below are not needed for now
Route::auth();

Route::get('/home', 'HomeController@index');
