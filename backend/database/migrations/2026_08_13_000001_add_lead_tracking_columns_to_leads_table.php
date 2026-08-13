<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Extend the leads table with the PHASE 8 lead generation fields:
     * assessment/contact/booking type, website, current software, improvements,
     * timeline, and UTM/referrer/landing-page attribution tracking.
     */
    public function up(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->string('lead_type')->default('contact')->after('source');
            $table->string('website')->nullable()->after('company');
            $table->string('current_software')->nullable()->after('website');
            $table->text('main_problem')->nullable()->after('current_software');
            $table->text('improvements')->nullable()->after('main_problem');
            $table->string('timeline')->nullable()->after('budget');

            // Attribution tracking
            $table->string('utm_source')->nullable()->after('timeline');
            $table->string('utm_medium')->nullable()->after('utm_source');
            $table->string('utm_campaign')->nullable()->after('utm_medium');
            $table->string('utm_content')->nullable()->after('utm_campaign');
            $table->string('referrer')->nullable()->after('utm_content');
            $table->string('landing_page')->nullable()->after('referrer');

            $table->index('lead_type');
            $table->index('utm_source');
        });
    }

    public function down(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->dropColumn([
                'lead_type',
                'website',
                'current_software',
                'main_problem',
                'improvements',
                'timeline',
                'utm_source',
                'utm_medium',
                'utm_campaign',
                'utm_content',
                'referrer',
                'landing_page',
            ]);
        });
    }
};
