<?php

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
