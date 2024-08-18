<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\Resetcontroller;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Admin\FavouriteCotroller;

use App\Http\Controllers\Admin\ProductCartController;


// user login api Sart

// Login Routes 
Route::post('/login', [AuthController::class, 'login']);

// register Routes 
Route::post('/register', [AuthController::class, 'register']);

 // Forget Password Routes 
Route::post('/forgetpassword', [ForgetController::class, 'forgetPassword']);

// Forget Password Routes 
Route::post('/resetpassword', [Resetcontroller::class, 'ResetPassword']);

 // Current User Route 
// Route::get('/user',[UserController::class, 'User'])->middleware('auth:api');



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// user login api End 






// get visitor
Route::get('/getvisitor', [VisitorController::class, 'GetVisitorDetails']);

// contact page route
Route::post('/postcontact', [ContactController::class, 'PostContactDetails']);

// All category route 
Route::get('/Allcategory', [CategoryController::class, 'AllCategory']);

// ProductList route 
Route::get('/productListbyremark/{remark}', [ProductListController::class, 'ProductListByRemark']);

// ProductList route 
Route::get('/ProductListbycategory/{category}', [ProductListController::class, 'ProductListByCategory']);
// ProductList route 
Route::get('/ProductListbysubcategory/{category}/{subcategory}', [ProductListController::class, 'ProductListBySubCategory']);

// ProductDetails route 
Route::get('/productdetails/{product_code}', [ProductDetailsController::class, 'ProductDetails']);

// Product Cart Route
Route::post('/addtocart', [ProductCartController::class, 'addToCart']);
// Favourite Route
Route::get('/favourite/{product_code}/{email}',[FavouriteController::class, 'AddFavourite']);
