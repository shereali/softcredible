<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * List admin users (for lead assignment).
     */
    public function index(): JsonResponse
    {
        return response()->json(
            User::query()->orderBy('name')->get(['id', 'name', 'email'])
        );
    }
}
