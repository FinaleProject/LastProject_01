<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 	
    	DB::table('users')->insert([
    	'name' => 'kiro',
    	'email' => 'kiro@test.com',
    	'password' => bcrypt('kiro123'),
    	'points' => 5000
    	]);
    }
}
