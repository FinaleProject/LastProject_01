<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Items extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	Schema::create('items', function (Blueprint $table) {
    		$table->increments('id');
    		$table->integer('user_id', false, true);
    		$table->tinyInteger('picture_number');
    		$table->decimal('item_price');
    		$table->tinyInteger('item_level');
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
    	Schema::drop('items');
    }
}
