<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function index() {
        $transactions = Transaction::with('user', 'book')->get();

        if($transactions->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "Resource data not found."
            ]);
        }

        return response()->json([
            "success" => true,
            "message" => "Get all resources.",
            "data" => $transactions
        ], 200);
    }

    public function store(Request $request) {
        // Validator
        $validator = Validator::make($request->all(), [
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|integer|min:1'
        ]);

        if($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        // Generate order number -> unique | ORD-0001
        $uniqueCode = "ORD-" . strtoupper(uniqid());

        // Ambil user yang sedang login & cek login (apakah user ada)
        $user = auth('api')->user();

        if (!$user) {
            return response()->json([
                "success" => false,
                "message" =>"Unauthorized."
            ], 401);
        }

        // Mencari data buku dari request
        $book = Book::find($request->book_id);

        // Cek stok buku
        if ($book->stock < $request->quantity) {
            return response()->json([
                "success" => false,
                "message" => "Book stock is unavailable."
            ], 400);
        }

        // Hitung total harga = price * quantity
        $totalAmount = $book->price * $request->quantity;

        // Kurangi stok buku (update)
        $book->stock -= $request->quantity;
        $book->save();

        // Simpan data transaksi
        $transaction = Transaction::create([
            'order_number' => $uniqueCode,
            'customer_id' => $user->id,
            'book_id' => $request->book_id,
            'total_amount' => $totalAmount
        ]);

        return response()->json([
            "success" => true,
            "message" => "Transaction created successfully.",
            "data" => $transaction
        ], 201);
    }

    public function show(string $id) {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json([
                "success" => false,
                "message" => "Resource not found."
            ], 404);
        }

        return response()->json([
            "success" => true,
            "message" => "Get detail resource.",
            "data" => $transaction
        ], 200);
    }

    public function update(string $id, Request $request) {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json([
                "success" => false,
                "message" => "Resource not found."
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|integer|min:1'
        ]);

        if($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        // Cek user
        $user = auth('api')->user();

        if (!$user) {
            return response()->json([
                "success" => false,
                "message" =>"Unauthorized."
            ], 401);
        }

        // Cek stok buku dan update
        $book = Book::find($request->book_id);

        if ($book->stock < $request->quantity) {
            return response()->json([
                "success" => false,
                "message" => "Book stock is unavailable."
            ], 400);
        }

        $totalAmount = $book->price * $request->quantity;

        $book->stock -= $request->quantity;
        $book->save();

        // Update data
        $data = [
            'customer_id' => $user->id,
            'book_id' => $request->book_id,
            'quantity' => $request->quantity,
            'total_amount' => $totalAmount
        ];

        $transaction->update($data);

        return response()->json([
            "success" => true,
            "message" => "Resource updated successfully.",
            "data" => $transaction
        ], 200);
    }

    public function destroy(string $id) {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json([
                "success" => false,
                "message" => "Resource not found."
            ], 404);
        }

        $transaction->delete();

        return response()->json([
            "success" => true,
            "message" => "Resource successfully deleted.",
        ], 200);
    }
}
