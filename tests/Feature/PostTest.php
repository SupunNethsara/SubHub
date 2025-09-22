<?php

it('has post page', function () {
    $response = $this->get('/post');

    $response->assertStatus(200);
});
