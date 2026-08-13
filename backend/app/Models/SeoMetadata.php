<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeoMetadata extends Model
{
    protected $fillable = [
        'entity_type',
        'entity_id',
        'title',
        'description',
        'keywords',
        'og_image',
        'canonical',
        'no_index',
    ];

    protected $casts = [
        'keywords' => 'array',
        'no_index' => 'boolean',
    ];

    /**
     * Polymorphic owner (service, case_study, blog_post, resource, industry).
     */
    public function entity(): \Illuminate\Database\Eloquent\Relations\MorphTo
    {
        return $this->morphTo();
    }
}
