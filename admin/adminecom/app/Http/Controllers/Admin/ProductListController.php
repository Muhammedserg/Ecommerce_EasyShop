<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;

class ProductListController extends Controller
{
    public function ProductListByRemark($remark)
    {
        $productList = ProductList::where('remark', $remark)->get();
        return response()->json($productList);
    } // End Method 

    public function ProductListByCategory($category)
    {
        $productList = ProductList::where('category', $category)->get();
        return response()->json($productList);
    } // End Method 

    public function ProductListBySubCategory(Request $request)
    {
        $category = $request->category;
        $subcategory = $request->subcategory;
        $productList = ProductList::where('category', $category)
                                  ->where('subcategory', $subcategory)
                                  ->get();
        return response()->json($productList);
    } // End Method 

}
