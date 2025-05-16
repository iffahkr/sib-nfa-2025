<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookstore | Authors</title>
    <style>
        * {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
        }

        .author {
            width: 250px;
            margin: 20px;
            padding: 30px;
            border-radius: 15px;
            border: 1px solid black;
        }

        li {
            list-style: none;
        }

        .author-name {
            font-size: large;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Selamat datang di halaman Penulis.</h1>
    <h2>Daftar Penulis</h2>

    <div class="container"> 
        @foreach ($authors as $author)
            <div>
                <ul class="author">
                    <li class="author-name">{{ $author['name'] }}</li>
                    <li class="author-bio">{{ $author['bio'] }}</li>
                </ul>
            </div>
        @endforeach
    </div>
</body>
</html>