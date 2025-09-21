<?php

use App\Models\Subscription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

uses(TestCase::class, RefreshDatabase::class);

it('has subscription page', function () {
    $subscriptions = Subscription::factory()->count(10)->create();
    expect(Subscription::count())->toBe(10);
});
