<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookstore</title>
    <style>
        * {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
        }

        .book {
            width: 250px;
            margin: 20px;
            padding: 30px;
            border-radius: 15px;
            border: 1px solid black;
        }

        li {
            list-style: none;
            margin-bottom: 5px;
            margin-top: 5px;
        }

        .book-title {
            font-size: large;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Selamat datang di Toko Bookstore</h1>

    <h2>Daftar Buku</h2>
    <div class="container">
        @foreach ($books as $book)
        <ul class="book">
            <li class="book-title">{{ $book['title'] }}</li>
            <li><b>Deskripsi:</b> {{ $book['description'] }}</li>
            <li><b>Harga:</b> {{ $book['price'] }}</li>
            <li><b>Stok:</b> {{ $book['stock'] }}</li>
        </ul>
        @endforeach
    </div>
</body>
</html>