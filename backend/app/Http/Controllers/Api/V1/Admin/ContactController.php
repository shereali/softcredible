<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return response()->json(ContactSubmission::query()->orderByDesc('created_at')->get());
    }

    public function updateStatus(Request $request, int $id)
    {
        $data = $request->validate([
            'status' => ['required', 'string', 'in:new,read,replied,closed'],
        ]);

        $submission = ContactSubmission::findOrFail($id);
        $submission->update(['status' => $data['status']]);

        return response()->json($submission);
    }
}
