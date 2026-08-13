<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;

class FaqController extends Controller
{
    public function index()
    {
        return response()->json(Faq::query()->orderBy('order')->get());
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return response()->noContent();
    }
}
