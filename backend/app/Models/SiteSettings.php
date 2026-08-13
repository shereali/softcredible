<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSettings extends Model
{
    protected $fillable = ['key', 'value', 'type'];

    protected $casts = [
        'value' => 'string',
    ];

    /**
     * Get all settings as a keyed array.
     */
    public static function allAsArray(): array
    {
        return static::query()->pluck('value', 'key')->all();
    }
}
