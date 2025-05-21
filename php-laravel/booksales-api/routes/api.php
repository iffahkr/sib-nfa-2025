<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/books')->group(function (){
    Route::get('/index', [BookController::class, 'index']);
    Route::post('/store', [BookController::class, 'store']);
});


Route::prefix('/genres')->group(function () {
    Route::get('/index', [GenreController::class, 'index']);
    Route::post('/store', [GenreController::class, 'store']);
});


Route::prefix('/authors')->group(function () {
    Route::get('/index', [AuthorController::class, 'index']);
    Route::post('/store', [AuthorController::class, 'store']);
});