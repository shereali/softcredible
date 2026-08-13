<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('case_studies', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('client');
            $table->foreignId('industry_id')->nullable()->constrained()->nullOnDelete();
            $table->text('summary');
            $table->text('challenge');
            $table->text('solution');
            $table->json('results')->nullable();
            $table->json('services')->nullable();
            $table->json('technologies')->nullable();
            $table->json('images')->nullable();
            $table->boolean('published')->default(false);
            $table->boolean('featured')->default(false);
            $table->json('seo')->nullable();
            $table->timestamps();

            $table->index(['published', 'featured']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('case_studies');
    }
};
