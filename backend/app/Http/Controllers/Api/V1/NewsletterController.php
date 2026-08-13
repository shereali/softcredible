<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNewsletterRequest;
use App\Models\NewsletterSubscriber;

class NewsletterController extends Controller
{
    public function subscribe(StoreNewsletterRequest $request)
    {
        $subscriber = NewsletterSubscriber::updateOrCreate(
            ['email' => $request->validated()['email']],
            [
                'name' => $request->validated()['name'] ?? null,
                'status' => 'active',
                'subscribed_at' => now(),
                'unsubscribed_at' => null,
            ]
        );

        return response()->json([
            'success' => true,
            'message' => 'Successfully subscribed to newsletter.',
        ], 201);
    }

    public function unsubscribe(StoreNewsletterRequest $request)
    {
        $subscriber = NewsletterSubscriber::where('email', $request->validated()['email'])->firstOrFail();
        $subscriber->update([
            'status' => 'unsubscribed',
            'unsubscribed_at' => now(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Successfully unsubscribed.',
        ]);
    }
}
