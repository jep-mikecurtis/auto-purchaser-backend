<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Auto;

class AutoController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'              => 'required',
            'email'             => 'required|unique:users',
            'auto_make'         => 'required',
            'auto_model'        => 'required',
            'credit_score'      => 'required',
            'purchase_price'    => 'required',
            'yearly_income'     => 'required',
        ]);

        if($validator) {
            $auto = $request->all();
            $auto['purchase_price']     = intval(preg_replace("/[^0-9.]/", "", $request->purchase_price));
            $auto['yearly_income']      = intval(preg_replace("/[^0-9.]/", "", $request->yearly_income));
            $auto['credit_score']       = intval(preg_replace("/[^0-9.]/", "", $request->credit_score));
            $auto = Auto::create($auto);
            $auto['message'] = 'You have been approved!';
            return ['success' => true, 'data' => $auto];
        }

    }
}
