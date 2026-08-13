<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Service extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'summary',
        'description',
        'icon',
        'features',
        'technologies',
        'order',
        'published',
        'seo',
    ];

    protected $casts = [
        'features' => 'array',
        'technologies' => 'array',
        'seo' => 'array',
        'published' => 'boolean',
    ];

    protected static function booted()
    {
        static::creating(function (self $service) {
            if (! $service->slug) {
                $service->slug = Str::slug($service->name);
            }
        });
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('published', true);
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('order')->orderBy('name');
    }
}
