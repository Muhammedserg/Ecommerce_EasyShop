<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;

    /**
     * Erstellen Sie eine neue Nachricht-Instanz.
     */
    public function __construct($token)
    {
        $this->token = $token;
        \Log::info('Token in ForgetMail Constructor: ' . $token);
    }

    /**
     * Bauen Sie die Nachricht.
     *
     * @return $this
     */
    public function build()
    {
        \Log::info('Token in ForgetMail Build: ' . $this->token);

        return $this->from('Support@easyShop.com')
                    ->view('mail.forget')
                    ->with([
                        'token' => $this->token,
                    ])
                    ->subject('Password Reset Link');
    }
}
