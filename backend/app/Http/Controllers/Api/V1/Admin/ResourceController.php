<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Resource;

class ResourceController extends Controller
{
    public function index()
    {
        return response()->json(Resource::query()->orderByDesc('created_at')->get());
    }

    public function destroy(Resource $resource)
    {
        $resource->delete();

        return response()->noContent();
    }
}
