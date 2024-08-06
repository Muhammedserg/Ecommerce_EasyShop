<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCart;
use App\Models\ProductList;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductCartController extends Controller
{
    public function addToCart(Request $request)
    {
        try {
            // Validate the inputs
            $request->validate([
                'email' => 'required|email',
                'size' => 'required|string',
                'color' => 'required|string',
                'quantity' => 'required|integer|min:1',
                'id' => 'required|integer|exists:product_lists,id', 
            ]);

            Log::info('Validation passed.');

            $email = $request->input('email');
            $size = $request->input('size');
            $color = $request->input('color');
            $quantity = $request->input('quantity');
            $productId = $request->input('id'); 

            try {
                // Fetch product details
                $productDetails = ProductList::findOrFail($productId);
                Log::info('Product details fetched.', ['productDetails' => $productDetails]);
            } catch (ModelNotFoundException $e) {
                Log::error('Product not found: ' . $productId);
                return response()->json(['error' => 'Product not found'], 404);
            }

            $price = $productDetails->price;
            $specialPrice = $productDetails->special_price;

            if ($specialPrice === 'na') {
                $totalPrice = $price * $quantity;
                $unitPrice = $price;
            } else {
                $totalPrice = $specialPrice * $quantity;
                $unitPrice = $specialPrice;
            }

            Log::info('Price calculation done.', ['totalPrice' => $totalPrice, 'unitPrice' => $unitPrice]);

            // Insert product into the cart
            $result = ProductCart::create([
                'email' => $email,
                'image' => $productDetails->image,
                'product_name' => $productDetails->title,
                'product_code' => $productDetails->product_code,
                'size' => $size,
                'color' => $color,
                'quantity' => $quantity,
                'unit_price' => $unitPrice,
                'total_price' => $totalPrice,
            ]);

            Log::info('Product added to cart.', ['result' => $result]);

            return response()->json(['success' => $result]);

        } catch (\Exception $e) {
            // Log the error
            Log::error('Error adding to cart: ' . $e->getMessage(), ['stack' => $e->getTraceAsString()]);
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    } // End Method

    public function cartCount(Request $request)
    {
        $productCode = $request->input('product_code');
        $result = ProductCart::where('product_code', $productCode)->count();
        return response()->json(['count' => $result]);
    } // End Method
}
