<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookstore | Genres</title>
    <style>
        * {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
        }

        .genre {
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

        .genre-name {
            font-size: large;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Selamat datang di halaman Genre.</h1>
    
    <h2>Daftar Genre Buku</h2>
    <div class="container">
        @foreach ($genres as $genre)
        <ul class="genre">
            <li class="genre-name">{{ $genre['name'] }}</li>
            <li>{{ $genre['description'] }}</li>
        </ul>
        @endforeach
    </div>
</body>
</html>