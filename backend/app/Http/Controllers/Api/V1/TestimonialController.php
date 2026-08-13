<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonialResource;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::published()->get();

        return TestimonialResource::collection($testimonials);
    }

    public function featured()
    {
        $testimonials = Testimonial::published()->featured()->get();

        return TestimonialResource::collection($testimonials);
    }
}
