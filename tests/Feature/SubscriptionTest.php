<?php

use App\Models\Subscription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

uses(TestCase::class, RefreshDatabase::class);

it('can create 10 subscriptions using factory', function () {
    $subscription = Subscription::factory()->create();
    expect(Subscription::count())->toBe(1);
    $this->assertDatabaseHas('subscriptions', [
        'email' => $subscription->email,
        'website_id' => $subscription->website_id,
    ]);
});
it('can store a subscription via API', function () {
    $data = [
        'email'=>'example@gmail.com',
        'website_id'=>'12'
    ];
    $response = $this->postJson('/api/subscription' , $data);
    $response->assertStatus(201)->assertJson([
        'subscription' => [
            'email' => $data['email'],
            'website_id' => $data['website_id'],
        ]
    ]);
});
it('cannot create subscription with duplicate email', function () {
    $subscription = Subscription::create([
        'email' => 'duplicate@example.com',
        'website_id' => 'website_001',
    ]);
    $data = [
        'email' => 'duplicate@example.com',
        'website_id' => 'website_002',
    ];
    $response = $this->postJson('/api/subscription' , $data);

    $response->assertStatus(422)->assertJsonValidationErrors('email');
    $this->assertDatabaseCount('subscriptions', 1);
});


