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



// below are not needed for now
Route::auth();

Route::get('/home', 'HomeController@index');
