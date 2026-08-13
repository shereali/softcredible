<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('company')->nullable();
            $table->string('service_interest');
            $table->string('budget')->nullable();
            $table->text('message')->nullable();
            $table->string('source')->default('website');
            $table->string('status')->default('new');
            $table->integer('score')->default(0);
            $table->timestamps();

            $table->index(['status', 'score']);
            $table->index('email');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
