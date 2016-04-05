<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Messages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	Schema::create('messages', function (Blueprint $table) {
    		$table->increments('id');
    		$table->integer('user_id', false, true);
    		$table->string('message_text', 1000);
    		$table->dateTimeTz('received_at');
    		$table->timestamps();
    	
    		$table
    		->foreign('user_id')
    		->references('id')
    		->on('users');
    	});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    	Schema::drop('messages');
    }
}
