<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/subscription' , [\App\Http\Controllers\SubscriptionController::class , 'store']);
