<?php

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

uses(RefreshDatabase::class , TestCase::class);

it('returns 422 when website_id header missing', function () {

    $response = $this->getJson('/api/posts');

    $response->assertStatus(422)
        ->assertJson([
            'success' => false,
            'message' => 'website_id header is required'
        ]);
});
it('fetches posts filtered by website_id header', function () {
    Post::factory()->create(['title' => 'A', 'website_id' => 'website_001']);
    Post::factory()->create(['title' => 'B', 'website_id' => 'website_001']);
    Post::factory()->create(['title' => 'C', 'website_id' => 'website_002']);

    $response = $this->getJson('/api/posts', [
        'website_id' => 'website_001'
    ]);

    $response->assertStatus(200)
        ->assertJson([
            'success' => true,
        ])
        ->assertJsonCount(2, 'posts');
});
