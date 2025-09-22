<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Post Notification</title>
</head>
<body>
<h1>{{ $post->title }}</h1>
<p>{{ $post->content }}</p>

@if($post->image_url)
    <p><img src="{{ $post->image_url }}" alt="Post image" style="max-width:100%;height:auto"></p>
@endif

<p>Thanks,<br>{{ config('app.name') }}</p>
</body>
</html>
