<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function PostContactDetails(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');

        date_default_timezone_set("Europe/Berlin");
        $contact_time = date("h:i:sa");
        $contact_date = date("d-m-y");

        $result = Contact::create([
            'name' => $name,
            'email' => $email,
            'message' => $message,
           
        ]);

        return response()->json($result);
    }
}
