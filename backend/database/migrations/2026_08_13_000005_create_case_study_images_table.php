<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('case_study_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('case_study_id')->constrained()->cascadeOnDelete();
            $table->string('url');
            $table->string('alt')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();

            $table->index(['case_study_id', 'order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('case_study_images');
    }
};
