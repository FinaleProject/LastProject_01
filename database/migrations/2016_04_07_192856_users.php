<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	Schema::create('users', function (Blueprint $table) {
    		$table->increments('id');
    		$table->string('name');
    		$table->string('email')->unique();
    		$table->string('password');
    		$table->bigInteger('points');
    		$table->integer('games_played');
    		$table->integer('best_score');
    		$table->tinyInteger('item_picture');
    		$table->integer('stars_collected');
    		$table->string('have_rated');
    		$table->string('api_token', 32)->unique();
    		$table->rememberToken();
    		$table->timestamps();
    	});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    	Schema::drop('users');
    }
}
