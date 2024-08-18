<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;
use App\Models\Favourites;

class FavouriteController extends Controller
{
    public function AddFavourite(Request $request)
    {
        // Validate the request
        $request->validate([
            'product_code' => 'required|string',
            'email' => 'required|email',
        ]);

        $product_code = $request->product_code;
        $email = $request->email;

        // Fetch product details
        $productDetails = ProductList::where('product_code', $product_code)->first();

        if ($productDetails) {
            $result = Favourites::create([
                'product_name' => $productDetails->title,
                'image' => $productDetails->image,
                'product_code' => $product_code,
                'email' => $email,
            ]);

            return response()->json(['success' => true, 'data' => $result], 201);
        } else {
            return response()->json(['success' => false, 'message' => 'Product not found'], 404);
        }
    } 
}
