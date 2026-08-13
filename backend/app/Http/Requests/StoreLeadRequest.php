<?php

namespace App\Http\Requests;

use App\Enums\LeadType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreLeadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'company' => ['nullable', 'string', 'max:255'],
            'role' => ['nullable', 'string', 'max:255'],
            'website' => ['nullable', 'string', 'url', 'max:500'],
            'current_software' => ['nullable', 'string', 'max:255'],
            'main_problem' => ['nullable', 'string', 'max:5000'],
            'improvements' => ['nullable', 'string', 'max:5000'],
            'service_interest' => ['required', 'string', 'max:255'],
            'budget' => ['nullable', 'string', 'max:255'],
            'timeline' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:10000'],
            'source' => ['nullable', 'string', 'max:255'],
            'type' => ['sometimes', Rule::enum(LeadType::class)],
            'tracking' => ['sometimes', 'array'],
            'tracking.utm_source' => ['nullable', 'string', 'max:255'],
            'tracking.utm_medium' => ['nullable', 'string', 'max:255'],
            'tracking.utm_campaign' => ['nullable', 'string', 'max:255'],
            'tracking.utm_content' => ['nullable', 'string', 'max:255'],
            'tracking.referrer' => ['nullable', 'string', 'max:500'],
            'tracking.landing_page' => ['nullable', 'string', 'max:500'],
        ];
    }

    /**
     * Map the request payload to the leads table columns.
     */
    public function leadData(): array
    {
        $tracking = $this->input('tracking', []);

        return [
            'name' => $this->input('name'),
            'email' => $this->input('email'),
            'phone' => $this->input('phone'),
            'company' => $this->input('company'),
            'role' => $this->input('role'),
            'website' => $this->input('website'),
            'current_software' => $this->input('current_software'),
            'main_problem' => $this->input('main_problem'),
            'improvements' => $this->input('improvements'),
            'service_interest' => $this->input('service_interest'),
            'budget' => $this->input('budget'),
            'timeline' => $this->input('timeline'),
            'message' => $this->input('message'),
            'source' => $this->input('source', 'website'),
            'lead_type' => LeadType::fromPayload((string) $this->input('type', LeadType::Contact->value)),
            'utm_source' => $tracking['utm_source'] ?? null,
            'utm_medium' => $tracking['utm_medium'] ?? null,
            'utm_campaign' => $tracking['utm_campaign'] ?? null,
            'utm_content' => $tracking['utm_content'] ?? null,
            'referrer' => $tracking['referrer'] ?? null,
            'landing_page' => $tracking['landing_page'] ?? null,
        ];
    }
}
