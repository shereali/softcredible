<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Dashboard analytics: lead totals, pipeline counts, conversion, and sources.
     */
    public function index(): JsonResponse
    {
        $totalLeads = Lead::count();
        $newLeads = Lead::where('status', Lead::STATUS_NEW)->count();
        $qualified = Lead::whereIn('status', [Lead::STATUS_QUALIFIED, Lead::STATUS_MEETING_SCHEDULED, Lead::STATUS_PROPOSAL_SENT, Lead::STATUS_NEGOTIATION])->count();
        $meetings = Lead::where('status', Lead::STATUS_MEETING_SCHEDULED)->count();
        $proposals = Lead::where('status', Lead::STATUS_PROPOSAL_SENT)->count();
        $won = Lead::where('status', Lead::STATUS_WON)->count();
        $lost = Lead::where('status', Lead::STATUS_LOST)->count();
        $followUp = Lead::where('status', Lead::STATUS_FOLLOW_UP)->count();

        // Conversion: won / (won + lost), or 0 when there are no decided leads.
        $decided = $won + $lost;
        $conversionRate = $decided > 0 ? round(($won / $decided) * 100, 1) : 0;

        $sources = Lead::query()
            ->select('source', DB::raw('count(*) as total'))
            ->groupBy('source')
            ->orderByDesc('total')
            ->get()
            ->map(fn ($row) => ['source' => $row->source, 'total' => (int) $row->total]);

        return response()->json([
            'totalLeads' => $totalLeads,
            'newLeads' => $newLeads,
            'qualified' => $qualified,
            'meetings' => $meetings,
            'proposals' => $proposals,
            'won' => $won,
            'lost' => $lost,
            'followUp' => $followUp,
            'conversionRate' => $conversionRate,
            'sources' => $sources,
        ]);
    }
}
