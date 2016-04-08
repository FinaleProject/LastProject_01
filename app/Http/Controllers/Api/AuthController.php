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
		
		if ($points > $user['best_score']) {
			$user['best_score'] = $points;
		}
		
		$user['points'] += $points;
		
		$user['games_played'] += 1;
		
		$user->save();	
	 }
	 
	 public function payPoints(Request $request, User $user)
	 {
	 
	 	$token = $request->token;
	 
	 	$user = User::where('api_token', '=' , $token)->first();
	 	
	 	$points = $request->points; // points na item-a
	 	
	 	if ($points >= 0){
	 		
	 		if($points > $user['points']) {
	 			return 'Not enough money';
	 		}
	 		else {
	 			$user['points'] = $request->points; // getting points
	 			
	 			$user['item_picture'] = $request->picture; // getting image number
	 			
	 			$user->save();
	 			
	 			return $user;
	 		}
	 		
	 	}
	 	
	 	else
	 		return 'Not enough money'; 
	 }
	 
	 public function getUser(Request $request, User $user) 
	 {
	 	$token = $request->token;
	 	$user = User::where('api_token', '=' , $token)->first();
	 	return $user;
	 }
	 
	 public function editProfile(Request $request, User $user)
	 {
	 	$token = $request->token;
	 
	 	$user = User::where('api_token', '=' , $token)->first();
	 	
	 	if ( (!$request->name) || (!$request->password) || (!$request->email) || (!$request->password2)) {
	 		return 'Not all fields filled!';
	 	}
	 	
	 	if ($request->password != $request->password2) {
	 		return 'Not same passwords';
	 	}
	 		
	 	else {
		    $this->validate($request, [
		    			'email' => '|min:5|max:20',
			 			'password' => '|min:4|max:10',
			 			'password2' => '|same:password',
			 			'name' => '|min:4|max:10'
			 ]); 
			 	
			 	
		 	$user['name'] = $request->name;
		 	$user['password'] = $request->password;
		 	$user['email'] = $request->email;
		 	
		 	$user['password'] = bcrypt($user['password']);
		 	
		 	$user->save();
		 	
	 	}
	 	
	 	return $user;
	 	
	 }
	
	
}
