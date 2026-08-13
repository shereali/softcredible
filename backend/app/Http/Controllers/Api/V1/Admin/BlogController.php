<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;

class BlogController extends Controller
{
    public function index()
    {
        return response()->json(BlogPost::query()->orderByDesc('created_at')->get());
    }

    public function destroy(BlogPost $blogPost)
    {
        $blogPost->delete();

        return response()->noContent();
    }
}
