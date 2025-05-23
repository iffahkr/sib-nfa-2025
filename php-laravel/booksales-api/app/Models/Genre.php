<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $table = 'genres';

    // Mass assignment guarded
    protected $fillable = ['name', 'description'];
}
