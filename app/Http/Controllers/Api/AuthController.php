<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;

use App\User;
use Illuminate\Support\Facades\Input;

class AuthController extends Controller
{
    public function login(Request $request) 
    {
    	$this->validate($request, [		
    		'email' => 'required|email',
    		'password' => 'required',
    	] );
    	

    	
    	if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
    		return Auth::user();
    	}
    	
    	return response(['email' => ['Wrong email or password']], 422);
    	
	}
	
	public function registration(Request $request)
	{
		$this->validate($request, [
				'email' => 'required|email',
				'password' => 'required|min:4|max:10',
				'password2' => 'required|same:password',
				'name' => 'required|min:4|max:10'
				
		] );
		 
		$data = $request->all();
		$data['api_token'] = md5(microtime(true));
		$data['password'] = bcrypt($data['password']);
		return User::create($data);
		
	}
	
	public function updatePoints(Request $request, User $user)
	{
		
		$token = $request->token;
		
		$points = $request->points;
		
		$user = User::where('api_token', '=' , $token)->first();
		
		$user['points'] += $points;
		
		$user->save();	
	 }
	 
	 public function getUser(Request $request, User $user) 
	 {
	 	$token = $request->token;
	 	$user = User::where('api_token', '=' , $token)->first();
	 	return $user;
	 }
	
	
}
