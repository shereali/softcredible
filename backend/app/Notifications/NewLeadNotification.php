<?php

namespace App\Notifications;

use App\Enums\LeadType;
use App\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewLeadNotification extends Notification
{
    use Queueable;

    public function __construct(public readonly Lead $lead) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Build the "New Softcredible Lead — [Service]" email.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $type = $this->lead->lead_type instanceof LeadType
            ? $this->lead->lead_type
            : LeadType::Contact;

        $mail = (new MailMessage)
            ->subject("New Softcredible Lead — {$type->serviceName()}")
            ->greeting('A new lead has been submitted.')
            ->line("**Name:** {$this->lead->name}")
            ->line("**Email:** {$this->lead->email}");

        if ($this->lead->phone) {
            $mail->line("**Phone:** {$this->lead->phone}");
        }
        if ($this->lead->company) {
            $mail->line("**Company:** {$this->lead->company}");
        }
        if ($this->lead->role) {
            $mail->line("**Role:** {$this->lead->role}");
        }
        if ($this->lead->website) {
            $mail->line("**Website:** {$this->lead->website}");
        }

        $mail->line("**Service interest:** {$this->lead->service_interest}");

        if ($this->lead->main_problem) {
            $mail->line("**Main problem:** {$this->lead->main_problem}");
        }
        if ($this->lead->message) {
            $mail->line("**Message:** {$this->lead->message}");
        }
        if ($this->lead->budget) {
            $mail->line("**Budget:** {$this->lead->budget}");
        }
        if ($this->lead->timeline) {
            $mail->line("**Timeline:** {$this->lead->timeline}");
        }

        $mail->line("**Source:** {$this->lead->source}");

        if ($this->lead->isTracked()) {
            $mail->line('**Attribution:**')
                ->line("- UTM source: {$this->lead->utm_source}")
                ->line("- UTM medium: {$this->lead->utm_medium}")
                ->line("- UTM campaign: {$this->lead->utm_campaign}")
                ->line("- UTM content: {$this->lead->utm_content}")
                ->line("- Referrer: {$this->lead->referrer}")
                ->line("- Landing page: {$this->lead->landing_page}");
        }

        return $mail;
    }
}
