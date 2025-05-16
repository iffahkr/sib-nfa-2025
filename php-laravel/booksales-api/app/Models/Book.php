<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';
    
    // private $books = [
    //     [
    //         'title' => 'Pulang',
    //         'description' => 'Petualangan seorang pemuda yang kembali ke desa kelahirannya.',
    //         'price' => 60000,
    //         'stock' => 15,
    //         'cover_photo' => 'pulang.jpg',
    //         'genre_id' => 1,
    //         'author_id' => 1
    //     ],
    //     [
    //         'title' => 'Sebuah Seni untuk Bersikap Bodo Amat',
    //         'description' => 'Buku yang membahas tentang kehidupan dan filosofi hidup seseorang',
    //         'price' => 50000,
    //         'stock' => 10,
    //         'cover_photo' => 'sebuah_seni_untuk_bersikap_bodo_amat.jpg',
    //         'genre_id' => 2,
    //         'author_id' => 2
    //     ],
    //     [
    //         'title' => 'Boruto',
    //         'description' => 'Komik petualangan seorang ninja bernama Boruto.',
    //         'price' => 30000,
    //         'stock' => 25,
    //         'cover_photo' => 'boruto.jpg',
    //         'genre_id' => 3,
    //         'author_id' => 3
    //     ],
    //     [
    //         'title' => 'Negeri Para Bedebah',
    //         'description' => 'Buku yang menceritakan tentang kondisi politik di suatu negeri dongeng.',
    //         'price' => 50000,
    //         'stock' => 15,
    //         'cover_photo' => 'negeri_para_bedebah.jpg',
    //         'genre_id' => 1,
    //         'author_id' => 1
    //     ],
    //     [
    //         'title' => 'Atomic Habits',
    //         'description' => 'Buku yang memberikan pelajaran tentang perbuatan kecil yang berdampak besar.',
    //         'price' => 60000,
    //         'stock' => 20,
    //         'cover_photo' => 'atomic_habits.jpg',
    //         'genre_id' => 2,
    //         'author_id' => 4
    //     ]
    // ];

    // public function getBooks() {
    //     return $this->books;
    // }

}
