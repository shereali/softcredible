<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TagController extends Controller
{
    public function index()
    {
        return response()->json(Tag::query()->orderBy('name')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'slug' => ['required', 'string', 'max:255', 'unique:tags,slug'],
            'name' => ['required', 'string', 'max:255'],
        ]);

        return response()->json(Tag::create($data), 201);
    }

    public function show(Tag $tag)
    {
        return response()->json($tag);
    }

    public function update(Request $request, Tag $tag)
    {
        $data = $request->validate([
            'slug' => ['sometimes', 'string', 'max:255', Rule::unique('tags', 'slug')->ignore($tag->id)],
            'name' => ['sometimes', 'string', 'max:255'],
        ]);

        $tag->update($data);

        return response()->json($tag);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return response()->noContent();
    }
}
