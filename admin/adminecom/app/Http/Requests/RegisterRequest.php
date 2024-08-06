<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'name' => 'required|max:55',
            'email' => 'required|email|unique:users|max:60',
            'password' => 'required|min:6|confirmed'
        ];
    }

    /**
     * Get the custom messages for validator errors.
     */
    public function messages()
    {
        return [
            'name.required' => 'Der Name ist erforderlich.',
            'email.required' => 'Die E-Mail-Adresse ist erforderlich.',
            'email.email' => 'Die E-Mail-Adresse muss eine gültige E-Mail-Adresse sein.',
            'email.unique' => 'Diese E-Mail-Adresse wird bereits verwendet.',
            'password.required' => 'Das Passwort ist erforderlich.',
            'password.confirmed' => 'Die Passwortbestätigung stimmt nicht überein.'
        ];
    }
}
