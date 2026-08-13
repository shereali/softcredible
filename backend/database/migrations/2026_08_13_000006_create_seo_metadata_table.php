<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('seo_metadata', function (Blueprint $table) {
            $table->id();
            // Polymorphic owner: service, case_study, blog_post, resource, industry.
            $table->string('entity_type');
            $table->unsignedBigInteger('entity_id');
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->json('keywords')->nullable();
            $table->string('og_image')->nullable();
            $table->string('canonical')->nullable();
            $table->boolean('no_index')->default(false);
            $table->timestamps();

            $table->index(['entity_type', 'entity_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('seo_metadata');
    }
};
