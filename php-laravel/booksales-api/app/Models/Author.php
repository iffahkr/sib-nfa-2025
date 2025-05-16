<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $genres = 'genres';
    
    // private $authors = [
    //     [
    //         'name' => 'Tere Liye',
    //         'photo' => 'tere_liye.jpg',
    //         'bio' => 'Penulis novel asal Indonesia dengan buku populernya Hujan.'
    //     ],
    //     [
    //         'name' => 'Mark Manson',
    //         'photo' => 'mark_manson.jpg',
    //         'bio' => 'Penulis asal Amerika dengan buku populernya Sebuah Seni untuk Bersikap Bodo Amat.'
    //     ],
    //     [
    //         'name' => 'Masashi Kishimoto',
    //         'photo' => 'masashi_kishimoto.jpg',
    //         'bio' => 'Penulis asal Jepang yang terkenal dengan karya populernya komik Naruto.'
    //     ],
    //     [
    //         'name' => 'James Clear',
    //         'photo' => 'james_clear.jpg',
    //         'bio' => 'Penulis asal Amerika yang terkenal dengan karya populernya Atomic Habits.'
    //     ],
    //     [
    //         'name' => 'Rintik Sedu',
    //         'photo' => 'rintik_sedu.jpg',
    //         'bio' => 'Penulis Novel asal Indonesia yang terkenal dengan karyanya bergenre galau.'
    //     ]
    // ];

    // public function getAuthors() {
    //     return $this->authors;
    // }

}
