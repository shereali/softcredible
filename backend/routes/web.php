<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['application' => 'Softcredible API', 'status' => 'ok'];
});
