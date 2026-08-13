<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Enums\LeadType;
use App\Http\Controllers\Controller;
use App\Http\Resources\LeadResource;
use App\Models\Lead;
use App\Models\LeadNote;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class LeadController extends Controller
{
    /**
     * List leads with filtering, search, and pagination.
     */
    public function index(Request $request)
    {
        $leads = Lead::query()
            ->with(['notes', 'assignee:id,name'])
            ->when($request->filled('search'), function ($q) use ($request) {
                $search = $request->string('search');
                $q->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('company', 'like', "%{$search}%")
                        ->orWhere('service_interest', 'like', "%{$search}%");
                });
            })
            ->when($request->filled('status'), fn ($q) => $q->where('status', $request->input('status')))
            ->when($request->filled('type'), fn ($q) => $q->where('lead_type', $request->input('type')))
            ->when($request->filled('source'), fn ($q) => $q->where('source', $request->input('source')))
            ->when($request->filled('assigned_to'), fn ($q) => $q->where('assigned_to', $request->integer('assigned_to')))
            ->when($request->boolean('unassigned'), fn ($q) => $q->whereNull('assigned_to'))
            ->orderByDesc('created_at')
            ->paginate($request->integer('per_page', 25));

        return response()->json([
            'data' => LeadResource::collection($leads),
            'meta' => [
                'total' => $leads->total(),
                'page' => $leads->currentPage(),
                'lastPage' => $leads->lastPage(),
                'perPage' => $leads->perPage(),
            ],
        ]);
    }

    /**
     * Show a single lead with notes.
     */
    public function show(Request $request, int $id)
    {
        $lead = Lead::with(['notes.user:id,name', 'assignee:id,name'])->findOrFail($id);

        return response()->json([
            'data' => new LeadResource($lead),
            'notes' => $lead->notes->map(fn (LeadNote $note) => [
                'id' => $note->id,
                'note' => $note->note,
                'user' => $note->user?->name,
                'created_at' => $note->created_at,
            ]),
        ]);
    }

    /**
     * Move a lead through the pipeline.
     */
    public function updateStatus(Request $request, int $id)
    {
        $data = $request->validate([
            'status' => ['required', Rule::in(Lead::STATUSES)],
        ]);

        $lead = Lead::findOrFail($id);
        $lead->update(['status' => $data['status']]);

        return response()->json(['data' => new LeadResource($lead)]);
    }

    /**
     * Assign a lead to an admin user.
     */
    public function assign(Request $request, int $id)
    {
        $data = $request->validate([
            'assigned_to' => ['required', 'integer', 'exists:users,id'],
        ]);

        $lead = Lead::findOrFail($id);
        $lead->update(['assigned_to' => $data['assigned_to']]);

        return response()->json(['data' => new LeadResource($lead)]);
    }

    /**
     * Add a note to a lead.
     */
    public function addNote(Request $request, int $id)
    {
        $data = $request->validate([
            'note' => ['required', 'string', 'max:5000'],
        ]);

        $lead = Lead::findOrFail($id);
        $note = $lead->notes()->create([
            'user_id' => $request->user()->id,
            'note' => $data['note'],
        ]);

        return response()->json(['data' => [
            'id' => $note->id,
            'note' => $note->note,
            'user' => $request->user()->name,
            'created_at' => $note->created_at,
        ]], 201);
    }

    /**
     * Export leads as CSV.
     */
    public function export(Request $request)
    {
        $leads = Lead::query()
            ->when($request->filled('status'), fn ($q) => $q->where('status', $request->input('status')))
            ->when($request->filled('type'), fn ($q) => $q->where('lead_type', $request->input('type')))
            ->orderByDesc('created_at')
            ->get();

        $columns = [
            'id', 'name', 'email', 'phone', 'company', 'role', 'website',
            'service_interest', 'budget', 'timeline', 'source', 'lead_type',
            'status', 'score', 'utm_source', 'utm_medium', 'utm_campaign',
            'utm_content', 'referrer', 'landing_page', 'created_at',
        ];

        $rows = $leads->map(function (Lead $lead) use ($columns) {
            return array_map(function (string $col) use ($lead) {
                $value = $lead->{$col};

                return $value instanceof LeadType ? $value->value : (string) $value;
            }, $columns);
        });

        $handle = fopen('php://temp', 'w+');

        fputcsv($handle, $columns);
        foreach ($rows as $row) {
            fputcsv($handle, $row);
        }
        rewind($handle);
        $csv = stream_get_contents($handle);
        fclose($handle);

        return response($csv)
            ->header('Content-Type', 'text/csv; charset=utf-8')
            ->header('Content-Disposition', 'attachment; filename="leads.csv"');
    }
}
