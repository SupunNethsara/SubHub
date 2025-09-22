<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SubscriptionRequest extends FormRequest
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
            'email' => ['required', 'email',
                Rule::unique('subscriptions')->where(function ($query) {
                    return $query->where('website_id', $this->input('website_id'));
                })
            ],
            'website_id' => ['required', 'string'],
        ];
    }
    public function messages()
    {
        return [
            'email.unique' => 'This email is already subscribed to this website.'
        ];
    }
}
