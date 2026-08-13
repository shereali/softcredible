<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLeadRequest;
use App\Http\Resources\LeadResource;
use App\Services\LeadService;

class LeadController extends Controller
{
    public function __construct(private readonly LeadService $leads) {}

    /**
     * Store a new lead (assessment, contact, or booking) and notify the team.
     */
    public function store(StoreLeadRequest $request)
    {
        $lead = $this->leads->create($request->leadData());

        return response()->json([
            'success' => true,
            'message' => 'Thanks — your request has been received.',
            'next_step' => $this->leads->confirmationMessage($lead->lead_type),
            'lead' => new LeadResource($lead),
        ], 201);
    }
}
