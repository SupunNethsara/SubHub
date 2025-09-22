<?php

use App\Http\Controllers\SubscriptionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/subscription', SubscriptionController::class);
Route::apiResource('posts' , \App\Http\Controllers\PostController::class);
