<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ResourceResource;
use App\Models\Resource;

class ResourceController extends Controller
{
    public function index()
    {
        $resources = Resource::published()->get();

        return ResourceResource::collection($resources);
    }

    public function show(string $slug)
    {
        $resource = Resource::where('slug', $slug)->published()->firstOrFail();

        return new ResourceResource($resource);
    }
}
