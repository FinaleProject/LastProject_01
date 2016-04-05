<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use App\Http\Requests;

class ContollerPageNavigation extends Controller
{
    public function navigateToHome() {
    	return view('home1');
    }
    
    public function saveUser() {
    	return 'asdada';
    }
    
    public function navigateToToken(User $token) {
    	return  $token->api_token;
    }
    
   public function navigateToChoices() {
   		return view('choices');
   	}
   	
}
