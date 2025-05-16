<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Genre::create([
           'name'=>'Fiksi',
           'description' => 'Sebuah genre berdasarkan imajinasi dan kejadian yang tidak nyata.'
        ]);

        Genre::create([
           'name'=>'Motivasi',
           'description' => 'Sebuah genre yang mendorong perubahan diri ke arah yang lebih baik.'
        ]);

        Genre::create([
            'name' => 'Komik',
            'description' => 'Sebuah genre animasi kartun dengan tulisan tangan.'
        ]);

        Genre::create([
            'name' => 'Non-Fiksi',
            'description' => 'Sebuah genre berdasarkan dengan fakta dan kejadian nyata.'
        ]);

        Genre::create([
            'name' => 'Fantasi',
            'description' => 'Sebuah genre yang mengandung karangan majik dan mistis.'
        ]);
    }
}
