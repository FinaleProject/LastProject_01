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
    		$table->tinyInteger('picture_number');
    		$table->decimal('item_price');
    		$table->tinyInteger('position');
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
    	Schema::drop('items');
    }
}
