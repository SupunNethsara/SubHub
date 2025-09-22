<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Post::class;
    public function definition(): array
    {
        return [
            'title'=> fake()->sentence(),
            'content'=>fake()->paragraph(),
            'website_id' => 'website_' . $this->faker->unique()->numberBetween(1, 10),
            'image' => null,
        ];
    }
}
