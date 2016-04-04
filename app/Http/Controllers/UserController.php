<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use App\Http\Requests;

class UserController extends Controller
{
    public function showUsers() {
    	
    	$users = User::all();
    	
    	return view('users.show', compact('users'));
    
    }
    
    public function showUser(User $user) {
    	 
    	return $user;
    
    }
    
    
}
