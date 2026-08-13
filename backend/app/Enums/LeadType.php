<?php

namespace App\Enums;

/**
 * The source type of a lead submission.
 *
 * Mirrors the frontend `type` field on the lead payload:
 * - assessment  → /free-assessment form
 * - contact     → /contact form
 * - booking     → /book-a-call form
 * - partnership → /solutions/development-partnership form
 * - resource    → /resources/[slug] download form
 * - estimate    → /estimate project estimate form
 */
enum LeadType: string
{
    case Assessment = 'assessment';
    case Contact = 'contact';
    case Booking = 'booking';
    case Partnership = 'partnership';
    case Resource = 'resource';
    case Estimate = 'estimate';

    /**
     * Human-readable label used in notifications and admin views.
     */
    public function label(): string
    {
        return match ($this) {
            self::Assessment => 'Free Assessment',
            self::Contact => 'Contact Enquiry',
            self::Booking => 'Strategy Call Booking',
            self::Partnership => 'Development Partnership',
            self::Resource => 'Resource Download',
            self::Estimate => 'Project Estimate',
        };
    }

    /**
     * Service name used in the notification subject, e.g. "New Softcredible Lead — Free Assessment".
     */
    public function serviceName(): string
    {
        return $this->label();
    }

    public static function fromPayload(string $type): self
    {
        return self::tryFrom($type) ?? self::Contact;
    }
}
