<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::published()
            ->ordered()
            ->paginate(12);

        return ServiceResource::collection($services);
    }

    public function show(string $slug)
    {
        $service = Service::where('slug', $slug)
            ->published()
            ->firstOrFail();

        return new ServiceResource($service);
    }

    public function featured()
    {
        $services = Service::published()
            ->featured()
            ->ordered()
            ->limit(6)
            ->get();

        return ServiceResource::collection($services);
    }
}
