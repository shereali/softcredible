<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Add the contact role field (used by resource download and partnership forms).
     */
    public function up(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->string('role')->nullable()->after('company');
        });
    }

    public function down(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->dropColumn('role');
        });
    }
};
