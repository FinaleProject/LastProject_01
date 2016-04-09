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
    		$table->integer('games_played')->unsigned();
    		$table->integer('best_score')->unsigned();
    		$table->tinyInteger('item_picture');
    		$table->tinyInteger('stars_collected')->unsigned();
    		$table->string('has_rated');
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
