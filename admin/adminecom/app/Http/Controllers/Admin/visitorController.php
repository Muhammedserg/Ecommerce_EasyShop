<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Visitor; // Use the correct class name

class VisitorController extends Controller
{
    public function GetVisitorDetails(Request $request)
    {
        $ip_address = $request->ip();
        date_default_timezone_set("Europe/Berlin");
        $visit_time = date("h:i:sa");
        $visit_date = date("d-m-y");

        $result = Visitor::create([  // Use create method for Eloquent model
            'ip_address' => $ip_address,
            'visit_time' => $visit_time,
            'visit_date' => $visit_date
        ]);

        return response()->json(['success' => $result]); // Return a proper JSON response
    }
}
