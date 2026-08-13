<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->text('summary');
            $table->text('description');
            $table->string('icon')->nullable();
            $table->json('features')->nullable();
            $table->json('technologies')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('published')->default(false);
            $table->json('seo')->nullable();
            $table->timestamps();

            $table->index(['published', 'order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
