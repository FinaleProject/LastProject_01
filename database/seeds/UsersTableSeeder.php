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
        	DB::table('users')
	        	->insert([
	        	'name' => 'Pavel',
	        	'email' => 'pavel@test.com',
	        	'password' => bcrypt('pavel111'),
	        	'level' => 80,
	        	'assets' => 'golden legs',
	        	'messages' => 'logged asd'
        	]);
        
        	
    }
}
