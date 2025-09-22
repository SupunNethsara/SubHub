<?php

use App\Models\Subscription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

uses(TestCase::class, RefreshDatabase::class);

it('can create 1 subscription using factory', function () {
    $subscription = Subscription::factory()->create();
    expect(Subscription::count())->toBe(1);
    $this->assertDatabaseHas('subscriptions', [
        'email' => $subscription->email,
        'website_id' => $subscription->website_id,
    ]);
});

it('can store a subscription via API', function () {
    $data = [
        'email' => 'example@gmail.com',
        'website_id' => 'website_001'
    ];

    $response = $this->postJson('/api/subscription', $data);

    $response->assertStatus(201)->assertJson([
        'subscription' => [
            'email' => $data['email'],
            'website_id' => $data['website_id'],
        ]
    ]);
    $this->assertDatabaseHas('subscriptions', $data);
});

it('can subscribe same email to multiple websites', function () {
    Subscription::create([
        'email' => 'user@example.com',
        'website_id' => 'website_001',
    ]);

    $data = [
        'email' => 'user@example.com',
        'website_id' => 'website_002',
    ];

    $response = $this->postJson('/api/subscription', $data);

    $response->assertStatus(201);
    $this->assertDatabaseCount('subscriptions', 2);
});

it('cannot create duplicate subscription for same website', function () {
    Subscription::create([
        'email' => 'duplicate@example.com',
        'website_id' => 'website_001',
    ]);

    $data = [
        'email' => 'duplicate@example.com',
        'website_id' => 'website_001',
    ];

    $response = $this->postJson('/api/subscription', $data);

    $response->assertStatus(422)
        ->assertJsonValidationErrors('email');

    $this->assertDatabaseCount('subscriptions', 1);
});

it('cannot create subscription without email', function () {
    $data = [
        'website_id' => 'website_001'
    ];

    $response = $this->postJson('/api/subscription', $data);

    $response->assertStatus(422)
        ->assertJsonValidationErrors('email');

    $this->assertDatabaseCount('subscriptions', 0);
});

it('cannot create subscription without website_id', function () {
    $data = [
        'email' => 'no-website@example.com',
    ];

    $response = $this->postJson('/api/subscription', $data);

    $response->assertStatus(422)
        ->assertJsonValidationErrors('website_id');

    $this->assertDatabaseCount('subscriptions', 0);
});

it('cannot create subscription with invalid email', function () {
    $data = [
        'email' => 'not-an-email',
        'website_id' => 'website_123',
    ];

    $response = $this->postJson('/api/subscription', $data);

    $response->assertStatus(422)
        ->assertJsonValidationErrors('email');

    $this->assertDatabaseCount('subscriptions', 0);
});
