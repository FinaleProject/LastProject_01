<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
			'name', 'email', 'password', 'level', 'position', 'points', 'api_token' , 'stars_collected', 'rated_by'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	*/
	protected $hidden = [
			'password', 'remember_token',
	];

	protected $table = 'users';
}
