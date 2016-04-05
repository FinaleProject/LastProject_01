<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use App\Item;

use App\Http\Requests;

class UserController extends Controller
{
    public function showUsers() {
    	
    	$users = User::all();
    	
    	return $users;
    
    }
    
    public function showUser(User $user_id) {
    	 
    	return $user_id;
    
    }
    
    public function showAllItems() {
    	
    	$items = Item::all();
    	
    	return $items;
    }

    
    
}
