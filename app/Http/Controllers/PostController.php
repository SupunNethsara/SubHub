<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Mail\PostNotification;
use App\Models\Post;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $websiteId = $request->header('website_id') ?? $request->query('website_id');

        if (!$websiteId) {
            return response()->json([
                'success' => false,
                'message' => 'website_id header is required'
            ], 422);
        }

        $posts = Post::where('website_id', $websiteId)->get();

        return response()->json([
            'success' => true,
            'posts' => $posts
        ], 200);
    }

    public function store(PostRequest $request)
    {
        $validated = $request->validated();

        try {
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $path = $file->store('posts', 'public');
                $validated['image'] = $path;
            }

            $post = Post::create($validated);

            $subscribers = Subscription::where('website_id', $post->website_id)->get();

            foreach ($subscribers as $subscriber) {
                Mail::to($subscriber->email)->send(new PostNotification($post));
            }

            return response()->json([
                'success' => true,
                'post' => $post,
            ], 201);

        } catch (\Exception $exception) {
            return response()->json([
                'success' => false,
                'message' => $exception->getMessage()
            ], 500);
        }
    }

}
