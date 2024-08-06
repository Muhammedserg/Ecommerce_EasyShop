<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\ForgetRequest;
use DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgetMail;
use Exception;

class ForgetController extends Controller
{
    public function forgetPassword(ForgetRequest $request)
    {
        $email = $request->input('email');
        \Log::info('Empfangene E-Mail-Adresse: ' . $email);

        if (!User::where('email', $email)->exists()) {
            \Log::error('E-Mail-Adresse existiert nicht: ' . $email);
            return response()->json([
                'message' => 'Invalid E-Mail-Adresse'
            ], 401);
        }

        // Generiere zufälliges Token
        $token = rand(10000, 999999);
        \Log::info('Generiertes Token: ' . $token);

        try {
            DB::table('password_resets')->updateOrInsert(
                ['email' => $email],
                ['token' => $token, 'created_at' => now()]
            );

            \Log::info('Token in Datenbank gespeichert: ' . $token);

            // Sende E-Mail an den Benutzer
            Mail::to($email)->send(new ForgetMail($token));
            \Log::info('E-Mail gesendet an: ' . $email);

            return response()->json([
                'message' => 'Code Sent to Your E-Mail-Adresse '
            ], 200);

        } catch (Exception $exception) {
            \Log::error('Fehler beim Senden der E-Mail: ' . $exception->getMessage());
            return response()->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
