<?php

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

uses(RefreshDatabase::class , TestCase::class);

it('can create 1 post using factory', function () {
    $post = Post::factory()->create();

    expect(Post::count())->toBe(1);
    $this->assertDatabaseHas('posts', [
        'title' => $post->title,
        'website_id' => $post->website_id,
    ]);
});
it('fails intentionally', function () {
    $this->assertTrue(false, 'This test is supposed to fail intentionally.');
});
