<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route Books API
Route::apiResource('/books', BookController::class);

// Route Genres API
Route::apiResource('/genres', GenreController::class);

// Route Authors API
Route::apiResource('/authors', AuthorController::class);