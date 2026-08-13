<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return response()->json(Service::query()->orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'slug' => ['required', 'string', 'unique:services,slug'],
            'name' => ['required', 'string', 'max:255'],
            'summary' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
        ]);

        return response()->json(Service::create($data), 201);
    }

    public function update(Request $request, Service $service)
    {
        $data = $request->validate([
            'slug' => ['sometimes', 'string', 'unique:services,slug,'.$service->id],
            'name' => ['sometimes', 'string', 'max:255'],
            'summary' => ['sometimes', 'nullable', 'string'],
            'description' => ['sometimes', 'nullable', 'string'],
        ]);

        $service->update($data);

        return response()->json($service);
    }

    public function destroy(Service $service)
    {
        $service->delete();

        return response()->noContent();
    }
}
