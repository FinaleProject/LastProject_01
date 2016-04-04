<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ContollerPageNavigation extends Controller
{
    public function navigateToHome() {
    	return view('home1');
    }
    
    public function navigateToRegistration() {
    	return view('auth.login');
    }
    
   public function navigateToChoices() {
   		return view('choices');
   	}
   	
}
