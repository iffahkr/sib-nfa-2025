<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'name' => 'Tere Liye',
            'photo' => 'tere_liye.jpg',
            'bio' => 'Penulis novel asal Indonesia dengan buku populernya Hujan.'
        ]);
        Author::create([
            'name' => 'Mark Manson',
            'photo' => 'mark_manson.jpg',
            'bio' => 'Penulis asal Amerika dengan buku populernya Sebuah Seni untuk Bersikap Bodo Amat.'
        ]);
        Author::create([
            'name' => 'Masashi Kishimoto',
            'photo' => 'masashi_kishimoto.jpg',
            'bio' => 'Penulis asal Jepang yang terkenal dengan karya populernya komik Naruto.'
        ]);
        Author::create([
            'name' => 'James Clear',
            'photo' => 'james_clear.jpg',
            'bio' => 'Penulis asal Amerika yang terkenal dengan karya populernya Atomic Habits.'
        ]);
        Author::create([
            'name' => 'Rintik Sedu',
            'photo' => 'rintik_sedu.jpg',
            'bio' => 'Penulis Novel asal Indonesia yang terkenal dengan karyanya bergenre galau.'
        ]);

    }
}
