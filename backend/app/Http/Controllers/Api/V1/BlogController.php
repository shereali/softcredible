<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;

class BlogController extends Controller
{
    public function index()
    {
        $posts = BlogPost::published()
            ->ordered()
            ->paginate(12);

        return BlogPostResource::collection($posts);
    }

    public function show(string $slug)
    {
        $post = BlogPost::where('slug', $slug)
            ->published()
            ->firstOrFail();

        return new BlogPostResource($post);
    }

    public function byCategory(string $categorySlug)
    {
        $posts = BlogPost::published()
            ->whereHas('category', fn ($q) => $q->where('slug', $categorySlug))
            ->ordered()
            ->get();

        return BlogPostResource::collection($posts);
    }

    public function byTag(string $tagSlug)
    {
        $posts = BlogPost::published()
            ->whereHas('tags', fn ($q) => $q->where('slug', $tagSlug))
            ->ordered()
            ->get();

        return BlogPostResource::collection($posts);
    }

    public function related(string $slug, int $limit = 3)
    {
        $post = BlogPost::where('slug', $slug)->firstOrFail();

        $related = BlogPost::published()
            ->where('id', '!=', $post->id)
            ->where(function ($query) use ($post) {
                $query->whereHas('category', fn ($q) => $q->where('id', $post->category_id))
                    ->orWhereHas('tags', fn ($q) => $q->whereIn('id', $post->tags->pluck('id')));
            })
            ->limit($limit)
            ->get();

        return BlogPostResource::collection($related);
    }
}
