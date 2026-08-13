<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\ServiceController;
use App\Http\Controllers\Api\V1\CaseStudyController;
use App\Http\Controllers\Api\V1\BlogController;
use App\Http\Controllers\Api\V1\LeadController;
use App\Http\Controllers\Api\V1\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Public API endpoints — no authentication required.
| Rate limiting: 60 requests per minute per IP.
|
*/

Route::middleware('throttle:60,1')->group(function () {
    // Services
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/featured', [ServiceController::class, 'featured']);
    Route::get('/services/{slug}', [ServiceController::class, 'show']);

    // Industries
    Route::get('/industries', [\App\Http\Controllers\Api\V1\IndustryController::class, 'index']);
    Route::get('/industries/{slug}', [\App\Http\Controllers\Api\V1\IndustryController::class, 'show']);

    // Case Studies
    Route::get('/case-studies', [CaseStudyController::class, 'index']);
    Route::get('/case-studies/featured', [CaseStudyController::class, 'featured']);
    Route::get('/case-studies/industry/{industrySlug}', [CaseStudyController::class, 'byIndustry']);
    Route::get('/case-studies/{slug}', [CaseStudyController::class, 'show']);

    // Blog
    Route::get('/blog', [BlogController::class, 'index']);
    Route::get('/blog/category/{categorySlug}', [BlogController::class, 'byCategory']);
    Route::get('/blog/tag/{tagSlug}', [BlogController::class, 'byTag']);
    Route::get('/blog/{slug}', [BlogController::class, 'show']);
    Route::get('/blog/{slug}/related', [BlogController::class, 'related']);

    // FAQs
    Route::get('/faqs', [\App\Http\Controllers\Api\V1\FaqController::class, 'index']);
    Route::get('/faqs/category/{category}', [\App\Http\Controllers\Api\V1\FaqController::class, 'byCategory']);

    // Testimonials
    Route::get('/testimonials', [\App\Http\Controllers\Api\V1\TestimonialController::class, 'index']);
    Route::get('/testimonials/featured', [\App\Http\Controllers\Api\V1\TestimonialController::class, 'featured']);

    // Resources
    Route::get('/resources', [\App\Http\Controllers\Api\V1\ResourceController::class, 'index']);
    Route::get('/resources/{slug}', [\App\Http\Controllers\Api\V1\ResourceController::class, 'show']);

    // Lead capture — stricter rate limit (5 submissions per minute per IP)
    Route::post('/leads', [LeadController::class, 'store'])->middleware('throttle:5,1');
    Route::post('/contact', [ContactController::class, 'store']);
    Route::post('/newsletter', [\App\Http\Controllers\Api\V1\NewsletterController::class, 'subscribe']);

    // Auth — login is rate-limited to prevent brute force
    Route::post('/auth/login', [AuthController::class, 'login'])->middleware('throttle:10,1');

    // Site settings
    Route::get('/settings', [\App\Http\Controllers\Api\V1\SettingsController::class, 'index']);
});

/*
|--------------------------------------------------------------------------
| Authenticated API Routes
|--------------------------------------------------------------------------
|
| Protected endpoints requiring Sanctum token authentication.
| Rate limiting: 120 requests per minute per user.
|
*/

Route::middleware(['auth:sanctum', 'throttle:120,1'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    Route::post('/newsletter/unsubscribe', [\App\Http\Controllers\Api\V1\NewsletterController::class, 'unsubscribe']);
});

/*
|--------------------------------------------------------------------------
| Admin API Routes
|--------------------------------------------------------------------------
|
| Admin-only endpoints for content management, lead management, and the
| dashboard. Requires Sanctum authentication + the admin role.
|
*/

Route::middleware(['auth:sanctum', 'role:admin', 'throttle:120,1'])->prefix('admin')->group(function () {
    // Dashboard analytics
    Route::get('/dashboard', [\App\Http\Controllers\Api\V1\Admin\DashboardController::class, 'index']);

    // Lead management
    Route::get('/leads', [\App\Http\Controllers\Api\V1\Admin\LeadController::class, 'index']);
    Route::get('/leads/export', [\App\Http\Controllers\Api\V1\Admin\LeadController::class, 'export']);
    Route::get('/leads/{id}', [\App\Http\Controllers\Api\V1\Admin\LeadController::class, 'show']);
    Route::patch('/leads/{id}/status', [\App\Http\Controllers\Api\V1\Admin\LeadController::class, 'updateStatus']);
    Route::patch('/leads/{id}/assign', [\App\Http\Controllers\Api\V1\Admin\LeadController::class, 'assign']);
    Route::post('/leads/{id}/notes', [\App\Http\Controllers\Api\V1\Admin\LeadController::class, 'addNote']);

    // Content management
    Route::middleware('permission:content.manage')->group(function () {
        Route::apiResource('services', \App\Http\Controllers\Api\V1\Admin\ServiceController::class);
        Route::apiResource('industries', \App\Http\Controllers\Api\V1\Admin\IndustryController::class);
        Route::apiResource('case-studies', \App\Http\Controllers\Api\V1\Admin\CaseStudyController::class);
        Route::apiResource('blog', \App\Http\Controllers\Api\V1\Admin\BlogController::class);
        Route::apiResource('categories', \App\Http\Controllers\Api\V1\Admin\CategoryController::class);
        Route::apiResource('tags', \App\Http\Controllers\Api\V1\Admin\TagController::class);
        Route::apiResource('resources', \App\Http\Controllers\Api\V1\Admin\ResourceController::class);
        Route::apiResource('faqs', \App\Http\Controllers\Api\V1\Admin\FaqController::class);
        Route::apiResource('testimonials', \App\Http\Controllers\Api\V1\Admin\TestimonialController::class);
        Route::get('/contact-submissions', [\App\Http\Controllers\Api\V1\Admin\ContactController::class, 'index']);
        Route::patch('/contact-submissions/{id}/status', [\App\Http\Controllers\Api\V1\Admin\ContactController::class, 'updateStatus']);
    });

    // Site settings
    Route::middleware('permission:settings.manage')->group(function () {
        Route::get('/settings', [\App\Http\Controllers\Api\V1\Admin\SettingsController::class, 'index']);
        Route::put('/settings', [\App\Http\Controllers\Api\V1\Admin\SettingsController::class, 'update']);
    });

    // Admin user listing (for lead assignment)
    Route::get('/users', [\App\Http\Controllers\Api\V1\Admin\UserController::class, 'index']);
});
