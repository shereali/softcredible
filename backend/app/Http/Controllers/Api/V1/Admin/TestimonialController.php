<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index()
    {
        return response()->json(Testimonial::query()->orderByDesc('created_at')->get());
    }

    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();

        return response()->noContent();
    }
}
