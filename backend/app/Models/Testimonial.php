<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = ['name', 'role', 'company', 'content', 'avatar', 'featured'];

    protected $casts = ['featured' => 'boolean'];

    public function scopePublished($query)
    {
        return $query->orderByDesc('featured');
    }
}
