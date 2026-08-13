<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $fillable = [
        'title', 'slug', 'description', 'type',
        'file_url', 'file_size', 'thumbnail',
        'published', 'seo',
    ];

    protected $casts = [
        'seo' => 'array',
        'published' => 'boolean',
    ];

    public function scopePublished($query)
    {
        return $query->where('published', true);
    }
}
