<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Industry;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class IndustryController extends Controller
{
    public function index()
    {
        return response()->json(Industry::query()->orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'slug' => ['required', 'string', 'max:255', 'unique:industries,slug'],
            'name' => ['required', 'string', 'max:255'],
            'description' => ['sometimes', 'nullable', 'string'],
            'image' => ['sometimes', 'nullable', 'string', 'max:500'],
            'order' => ['sometimes', 'integer'],
            'published' => ['sometimes', 'boolean'],
        ]);

        return response()->json(Industry::create($data), 201);
    }

    public function show(Industry $industry)
    {
        return response()->json($industry);
    }

    public function update(Request $request, Industry $industry)
    {
        $data = $request->validate([
            'slug' => ['sometimes', 'string', 'max:255', Rule::unique('industries', 'slug')->ignore($industry->id)],
            'name' => ['sometimes', 'string', 'max:255'],
            'description' => ['sometimes', 'nullable', 'string'],
            'image' => ['sometimes', 'nullable', 'string', 'max:500'],
            'order' => ['sometimes', 'integer'],
            'published' => ['sometimes', 'boolean'],
        ]);

        $industry->update($data);

        return response()->json($industry);
    }

    public function destroy(Industry $industry)
    {
        $industry->delete();

        return response()->noContent();
    }
}
