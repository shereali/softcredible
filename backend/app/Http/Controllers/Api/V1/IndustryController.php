<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\IndustryResource;
use App\Models\Industry;

class IndustryController extends Controller
{
    public function index()
    {
        $industries = Industry::published()->get();

        return IndustryResource::collection($industries);
    }

    public function show(string $slug)
    {
        $industry = Industry::where('slug', $slug)->published()->firstOrFail();

        return new IndustryResource($industry);
    }
}
