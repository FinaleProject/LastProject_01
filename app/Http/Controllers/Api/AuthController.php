<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use App\User;

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
				'pass1' => 'required|min:5',
				'pass2' => 'required|same:pass1',
				'name' => 'required|min:5',
				
		] );
		 
		$data = $request->all();
		$data['api_token'] = md5(microtime(true));
		return User::create($data);
		
	}
	
	
}
