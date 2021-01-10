<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'              => 'required',
            'email'             => 'required|unique:users',
            'password'          => 'required',
            'passwordConfirm'   => 'same:password'
        ]);

        if($validator->fails()) {
            return ['success' => false, 'data' => null, 'errors' => $validator->errors()];
        }

        $data = $request->except('passwordConfirm');
        $data['password'] = Hash::make($data['password']);
        $data['api_token'] = Str::random(60);
        $user = User::create($data);
        return ['success' => true, 'data' => $user];
    }
}
