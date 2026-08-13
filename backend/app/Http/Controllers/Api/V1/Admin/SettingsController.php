<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSettings;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * List all site settings.
     */
    public function index(): JsonResponse
    {
        return response()->json(SiteSettings::allAsArray());
    }

    /**
     * Upsert site settings from a keyed payload.
     */
    public function update(Request $request): JsonResponse
    {
        $settings = $request->validate([
            'site_name' => ['sometimes', 'string', 'max:255'],
            'site_url' => ['sometimes', 'string', 'max:255'],
            'tagline' => ['sometimes', 'string', 'max:255'],
            'description' => ['sometimes', 'string', 'max:1000'],
            'contact_email' => ['sometimes', 'nullable', 'email', 'max:255'],
            'contact_phone' => ['sometimes', 'nullable', 'string', 'max:50'],
            'address' => ['sometimes', 'nullable', 'string', 'max:500'],
        ]);

        foreach ($settings as $key => $value) {
            SiteSettings::updateOrCreate(
                ['key' => $key],
                ['value' => $value, 'type' => 'string']
            );
        }

        return response()->json(SiteSettings::allAsArray());
    }
}
