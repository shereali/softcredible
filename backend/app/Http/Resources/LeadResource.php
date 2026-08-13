<?php

namespace App\Http\Resources;

use App\Enums\LeadType;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LeadResource extends JsonResource
{
    /**
     * Transform the lead into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $type = $this->lead_type instanceof LeadType
            ? $this->lead_type
            : LeadType::Contact;

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'company' => $this->company,
            'role' => $this->role,
            'website' => $this->website,
            'service_interest' => $this->service_interest,
            'budget' => $this->budget,
            'timeline' => $this->timeline,
            'message' => $this->message,
            'source' => $this->source,
            'type' => $type->value,
            'status' => $this->status,
            'score' => $this->score,
            'utm_source' => $this->utm_source,
            'utm_medium' => $this->utm_medium,
            'utm_campaign' => $this->utm_campaign,
            'utm_content' => $this->utm_content,
            'referrer' => $this->referrer,
            'landing_page' => $this->landing_page,
            'assigned_to' => $this->assigned_to,
            'assignee' => $this->whenLoaded('assignee', fn () => $this->assignee?->only(['id', 'name'])),
            'created_at' => $this->created_at,
        ];
    }
}
