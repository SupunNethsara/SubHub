<?php

use App\Mail\PostNotification;
use App\Models\Post;
use App\Models\Subscription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;
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
it('can still run this test', function () {
    $this->assertTrue(true);
});
it('can create a post with image and send mail to subscribers', function () {
    Storage::fake('public');
    Mail::fake();

    $subscriber = Subscription::factory()->create([
        'email' => 'subscriber1@example.com',
        'website_id' => '1'
    ]);

    $file = UploadedFile::fake()->image('post.jpg');

    $post = Post::factory()->create([
        'title' => 'New Post',
        'website_id' => '1',
        'image' => $file->hashName(),
    ]);

    Storage::disk('public')->putFileAs('', $file, $file->hashName());
    Mail::to($subscriber->email)->send(new PostNotification($post));

    $this->assertDatabaseHas('posts', ['title' => 'New Post']);
    Storage::disk('public')->assertExists($file->hashName());
    Mail::assertSent(PostNotification::class, function ($mail) use ($subscriber) {
        return $mail->hasTo($subscriber->email);
    });
});
it('can create a post with image and notify subscribers', function () {
    Storage::fake('public');
    Mail::fake();

    $subscriber = Subscription::factory()->create([
        'website_id' => 'website_001',
        'email' => 'subscriber1@example.com'
    ]);

    $file = UploadedFile::fake()->image('post.jpg');

    $response = $this->postJson('/api/posts', [
        'title' => 'Test Post',
        'content' => 'Post content',
        'website_id' => 'website_001',
        'image' => $file
    ]);

    $response->assertStatus(201)
        ->assertJson([
            'success' => true,
            'post' => [
                'title' => 'Test Post',
                'website_id' => 'website_001'
            ]
        ]);

    $this->assertDatabaseHas('posts', [
        'title' => 'Test Post',
        'website_id' => 'website_001'
    ]);

    Storage::disk('public')->assertExists('posts/' . $file->hashName());

    Mail::assertSent(PostNotification::class, function ($mail) use ($subscriber) {
        return $mail->hasTo($subscriber->email);
    });
});

it('cannot create a post without title', function () {
    $file = UploadedFile::fake()->image('post.jpg');

    $response = $this->postJson('/api/posts', [
        'content' => 'Some content',
        'website_id' => 'website_001',
        'image' => $file
    ]);
    $response->assertStatus(422)
        ->assertJsonValidationErrors('title');
});
it('cannot create a post without content', function () {
    $file = UploadedFile::fake()->image('post.jpg');

    $response = $this->postJson('/api/posts', [
        'title' => 'Test Post',
        'website_id' => 'website_001',
        'image' => $file
    ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors('content');
});

it('cannot create a post without website_id', function () {
    $file = UploadedFile::fake()->image('post.jpg');

    $response = $this->postJson('/api/posts', [
        'title' => 'Test Post',
        'content' => 'Some content',
        'image' => $file
    ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors('website_id');
});

it('fails if image is not valid type', function () {
    $file = UploadedFile::fake()->create('document.pdf', 100);

    $response = $this->postJson('/api/posts', [
        'title' => 'Test Post',
        'content' => 'Some content',
        'website_id' => 'website_001',
        'image' => $file
    ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors('image');
});
