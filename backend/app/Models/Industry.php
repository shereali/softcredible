<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    protected $fillable = ['slug', 'name', 'description', 'image', 'order', 'published'];

    protected $casts = ['published' => 'boolean'];

    public function caseStudies()
    {
        return $this->hasMany(CaseStudy::class);
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('published', true)->orderBy('order');
    }
}
