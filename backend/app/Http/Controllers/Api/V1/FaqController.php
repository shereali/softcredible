<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\FaqResource;
use App\Models\Faq;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::published()->get();

        return FaqResource::collection($faqs);
    }

    public function byCategory(string $category)
    {
        $faqs = Faq::published()->where('category', $category)->get();

        return FaqResource::collection($faqs);
    }
}
