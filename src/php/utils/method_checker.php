<?php
    function AllowedMethod($method) {
        if ($method == "BOTH") {
            return;
        } else if ($method == "POST" && $_SERVER["REQUEST_METHOD"] === "POST") {
            return;
        } else if ($method == "GET" && $_SERVER["REQUEST_METHOD"] === "GET") {
            return;
        }
        http_response_code(405);
        exit();
    }
?>