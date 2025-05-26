<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Method di API tanpa login
// Dapat diakses oleh semua role

Route::apiResource('/books', BookController::class)->only(['index', 'show']);
    
Route::apiResource('/genres', GenreController::class)->only(['index', 'show']);
    
Route::apiResource('/authors', AuthorController::class)->only(['index', 'show']);

// Harus login dengan token

Route::middleware(['auth:api'])->group(function () {
    
    // Hanya dapat diakses oleh admin
    Route::middleware(['role:admin'])->group(function () {
        // Route Books API
        Route::apiResource('/books', BookController::class)->only(['update', 'store', 'destroy']);
        
        // Route Genres API
        Route::apiResource('/genres', GenreController::class)->only(['update', 'store', 'destroy']);
        
        // Route Authors API
        Route::apiResource('/authors', AuthorController::class)->only(['update', 'store', 'destroy']);
    });

});
