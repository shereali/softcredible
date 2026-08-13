<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Resources\ContactSubmissionResource;
use App\Models\ContactSubmission;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request)
    {
        $submission = ContactSubmission::create($request->validated());

        return (new ContactSubmissionResource($submission))
            ->response()
            ->setStatusCode(201);
    }
}
