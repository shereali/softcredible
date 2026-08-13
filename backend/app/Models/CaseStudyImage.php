<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CaseStudyImage extends Model
{
    protected $fillable = ['case_study_id', 'url', 'alt', 'order'];

    protected $casts = [
        'order' => 'integer',
    ];

    public function caseStudy(): BelongsTo
    {
        return $this->belongsTo(CaseStudy::class);
    }
}
