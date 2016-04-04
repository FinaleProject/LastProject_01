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

Route::get('reg', 'ContollerPageNavigation@navigateToRegistration');

Route::get('choices', 'ContollerPageNavigation@navigateToChoices');

Route::get('users', 'UserController@showUsers');

Route::get('user', 'UserController@showUser');



// below are not needed for now
Route::auth();

Route::get('/home', 'HomeController@index');
