<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Harus login dengan token

Route::middleware(['auth:api'])->group(function () {

    Route::apiResource('/books', BookController::class)->only(['update', 'show', 'store']);
        
    Route::apiResource('/genres', GenreController::class)->only(['update', 'show', 'store']);
        
    Route::apiResource('/authors', AuthorController::class)->only(['update', 'show', 'store']);

    Route::apiResource('/transactions', TransactionController::class)->only(['update', 'store', 'show']);
    
    // Hanya dapat diakses oleh admin
    Route::middleware(['role:admin'])->group(function () {
        // Route Books
        Route::apiResource('/books', BookController::class)->only(['index', 'destroy']);
    
        // Route Genres
        Route::apiResource('/genres', GenreController::class)->only(['index', 'destroy']);
        
        // Route Authors
        Route::apiResource('/authors', AuthorController::class)->only(['index', 'destroy']);

        // Route Transactions
        Route::apiResource('/transactions', TransactionController::class)->only(['index', 'destroy']);
    });

});
