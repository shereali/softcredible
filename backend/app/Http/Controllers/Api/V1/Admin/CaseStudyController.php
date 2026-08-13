<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use Illuminate\Http\Request;

class CaseStudyController extends Controller
{
    public function index()
    {
        return response()->json(CaseStudy::query()->orderByDesc('created_at')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'slug' => ['required', 'string', 'unique:case_studies,slug'],
            'title' => ['required', 'string', 'max:255'],
            'client' => ['required', 'string', 'max:255'],
            'summary' => ['nullable', 'string'],
            'challenge' => ['nullable', 'string'],
            'solution' => ['nullable', 'string'],
        ]);

        return response()->json(CaseStudy::create($data), 201);
    }

    public function update(Request $request, CaseStudy $caseStudy)
    {
        $data = $request->validate([
            'slug' => ['sometimes', 'string', 'unique:case_studies,slug,'.$caseStudy->id],
            'title' => ['sometimes', 'string', 'max:255'],
            'client' => ['sometimes', 'string', 'max:255'],
            'summary' => ['sometimes', 'nullable', 'string'],
            'challenge' => ['sometimes', 'nullable', 'string'],
            'solution' => ['sometimes', 'nullable', 'string'],
        ]);

        $caseStudy->update($data);

        return response()->json($caseStudy);
    }

    public function destroy(CaseStudy $caseStudy)
    {
        $caseStudy->delete();

        return response()->noContent();
    }
}
