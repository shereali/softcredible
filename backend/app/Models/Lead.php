<?php

namespace App\Models;

use App\Enums\LeadType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lead extends Model
{
    /**
     * Lead pipeline statuses (PHASE 8).
     */
    public const STATUS_NEW = 'new';

    public const STATUS_CONTACTED = 'contacted';

    public const STATUS_QUALIFIED = 'qualified';

    public const STATUS_MEETING_SCHEDULED = 'meeting scheduled';

    public const STATUS_PROPOSAL_SENT = 'proposal sent';

    public const STATUS_NEGOTIATION = 'negotiation';

    public const STATUS_WON = 'won';

    public const STATUS_LOST = 'lost';

    public const STATUS_FOLLOW_UP = 'follow up';

    public const STATUSES = [
        self::STATUS_NEW,
        self::STATUS_CONTACTED,
        self::STATUS_QUALIFIED,
        self::STATUS_MEETING_SCHEDULED,
        self::STATUS_PROPOSAL_SENT,
        self::STATUS_NEGOTIATION,
        self::STATUS_WON,
        self::STATUS_LOST,
        self::STATUS_FOLLOW_UP,
    ];

    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'role',
        'website',
        'current_software',
        'main_problem',
        'improvements',
        'service_interest',
        'budget',
        'timeline',
        'message',
        'source',
        'lead_type',
        'status',
        'assigned_to',
        'score',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'referrer',
        'landing_page',
    ];

    protected $casts = [
        'score' => 'integer',
        'lead_type' => LeadType::class,
    ];

    protected static function booted()
    {
        static::creating(function (self $lead) {
            if (is_null($lead->status)) {
                $lead->status = self::STATUS_NEW;
            }
            if (is_null($lead->score)) {
                $lead->score = 0;
            }
            if (is_null($lead->lead_type)) {
                $lead->lead_type = LeadType::Contact;
            }
        });
    }

    public function scopeNew(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_NEW);
    }

    public function scopeQualified(Builder $query): Builder
    {
        return $query->whereIn('status', [self::STATUS_QUALIFIED, self::STATUS_PROPOSAL_SENT]);
    }

    public function scopeOfType(Builder $query, LeadType $type): Builder
    {
        return $query->where('lead_type', $type);
    }

    /**
     * Whether the lead arrived through a tracked campaign (has UTM data).
     */
    public function isTracked(): bool
    {
        return $this->utm_source !== null || $this->utm_campaign !== null;
    }

    public function notes(): HasMany
    {
        return $this->hasMany(LeadNote::class)->latest();
    }

    public function assignee(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}
