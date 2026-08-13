<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CaseStudy extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'client',
        'industry_id',
        'summary',
        'challenge',
        'solution',
        'results',
        'services',
        'technologies',
        'images',
        'published',
        'featured',
        'seo',
    ];

    protected $casts = [
        'results' => 'array',
        'services' => 'array',
        'technologies' => 'array',
        'images' => 'array',
        'seo' => 'array',
        'published' => 'boolean',
        'featured' => 'boolean',
    ];

    public function industry(): BelongsTo
    {
        return $this->belongsTo(Industry::class);
    }

    /**
     * Gallery images when stored as rows rather than the images JSON column.
     */
    public function galleryImages(): HasMany
    {
        return $this->hasMany(CaseStudyImage::class)->orderBy('order');
    }

    public function scopePublished($query)
    {
        return $query->where('published', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderByDesc('featured')->orderByDesc('created_at');
    }
}
