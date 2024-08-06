<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;
use App\Models\ProductDetails;

class ProductDetailsController extends Controller
{
    public function ProductDetails($id)
    {
        // Fetch product details and product list based on the provided ID
        $productDetails = ProductDetails::where('product_id', $id)->get();
        $productList = ProductList::where('id', $id)->get();

        // Check if product list is found
        if ($productList->isEmpty()) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Create an associative array to hold the response data
        $item = [
            'productDetails' => $productDetails,
            'productList' => $productList,
        ];

        // Return the response data
        return response()->json($item);
    } // End method
}
