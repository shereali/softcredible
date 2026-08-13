<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json(Category::query()->orderBy('name')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'slug' => ['required', 'string', 'max:255', 'unique:categories,slug'],
            'name' => ['required', 'string', 'max:255'],
        ]);

        return response()->json(Category::create($data), 201);
    }

    public function show(Category $category)
    {
        return response()->json($category);
    }

    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'slug' => ['sometimes', 'string', 'max:255', Rule::unique('categories', 'slug')->ignore($category->id)],
            'name' => ['sometimes', 'string', 'max:255'],
        ]);

        $category->update($data);

        return response()->json($category);
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return response()->noContent();
    }
}
