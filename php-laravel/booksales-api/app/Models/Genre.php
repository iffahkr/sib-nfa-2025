<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $table = 'genres';
    
    // private $genres = [
    //     [
    //         'name' => 'Fiksi',
    //         'description' => 'Sebuah genre berdasarkan imajinasi dan kejadian yang tidak nyata.'
    //     ],
    //     [
    //         'name' => 'Motivasi',
    //         'description' => 'Sebuah genre yang mendorong perubahan diri ke arah yang lebih baik.'
    //     ],
    //     [
    //         'name' => 'Komik',
    //         'description' => 'Sebuah genre animasi kartun dengan tulisan tangan.'
    //     ],
    //     [
    //         'name' => 'Non-Fiksi',
    //         'description' => 'Sebuah genre berdasarkan dengan fakta dan kejadian nyata.'
    //     ],
    //     [
    //         'name' => 'Fantasi',
    //         'description' => 'Sebuah genre yang mengandung karangan majik dan mistis.'
    //     ]
    // ];

    // public function getGenres() {
    //     return $this->genres;
    // }

}
