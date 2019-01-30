<?php
// META
require 'resources/includes/head.php';

// HEADER
require 'resources/views/header.php';

echo <<< CONTENT
    <article>
        <h2>{$page_heading}</h2>
CONTENT;
    if ($sub) {
        require "resources/pages/{$sub}";
    }
    else {
        require "resources/pages/{$page}";
    }
echo <<< CONTENT
    </article>
CONTENT;

// FOOTER
require 'resources/views/footer.php';
?>
