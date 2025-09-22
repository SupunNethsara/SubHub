<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;
    use HasUuids;

    protected $fillable =[
        'title',
        'content',
        'website_id',
        'image',
    ];
    public $incrementing = false;
    protected $keyType = 'string';
}
