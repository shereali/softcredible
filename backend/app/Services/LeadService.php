<?php

namespace App\Services;

use App\Enums\LeadType;
use App\Models\Lead;
use App\Notifications\NewLeadNotification;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class LeadService
{
    /**
     * Recipient(s) for lead notifications. Override via env('LEAD_NOTIFY_EMAIL').
     */
    public function notificationRecipients(): array
    {
        $to = env('LEAD_NOTIFY_EMAIL');

        return $to ? [$to] : ['leads@softcredible.com'];
    }

    /**
     * Store a lead from validated form data and trigger the notification.
     */
    public function create(array $data): Lead
    {
        $lead = Lead::create($data);

        $this->notify($lead);

        return $lead;
    }

    /**
     * Send the "New Softcredible Lead — [Service]" notification.
     *
     * Email is dev-safe: with MAIL_MAILER=log (the default when no SMTP is
     * configured) the mailable is written to the Laravel log. Any notification
     * delivery failure is logged but never fails the lead creation itself.
     */
    public function notify(Lead $lead): void
    {
        try {
            Notification::route('mail', $this->notificationRecipients())
                ->notify(new NewLeadNotification($lead));
        } catch (\Throwable $e) {
            Log::error('Lead notification failed', [
                'lead_id' => $lead->id,
                'error' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Human-facing confirmation for the success experience.
     */
    public function confirmationMessage(LeadType $type): string
    {
        return match ($type) {
            LeadType::Assessment => 'Our team will review your assessment and schedule your free 15-minute consultation within one business day.',
            LeadType::Booking => 'Our team will reach out with available times for your free strategy call.',
            LeadType::Contact => 'Our team will review your project details and respond within one business day.',
            LeadType::Partnership => 'Our team will review your partnership enquiry and reach out to discuss how we can support your agency.',
            LeadType::Resource => 'Check your email for the download link and your next steps.',
        };
    }
}
