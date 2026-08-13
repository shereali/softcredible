<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\CaseStudyResource;
use App\Models\CaseStudy;

class CaseStudyController extends Controller
{
    public function index()
    {
        $caseStudies = CaseStudy::published()
            ->ordered()
            ->paginate(12);

        return CaseStudyResource::collection($caseStudies);
    }

    public function show(string $slug)
    {
        $caseStudy = CaseStudy::where('slug', $slug)
            ->published()
            ->firstOrFail();

        return new CaseStudyResource($caseStudy);
    }

    public function featured()
    {
        $caseStudies = CaseStudy::published()
            ->featured()
            ->ordered()
            ->limit(6)
            ->get();

        return CaseStudyResource::collection($caseStudies);
    }

    public function byIndustry(string $industrySlug)
    {
        $caseStudies = CaseStudy::published()
            ->whereHas('industry', fn ($q) => $q->where('slug', $industrySlug))
            ->ordered()
            ->get();

        return CaseStudyResource::collection($caseStudies);
    }
}
