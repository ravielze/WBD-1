<?php
$host = "db";
$username = "root";
$password = "password";
$database = "wbd";

function ConnectDatabase() {
    global $host, $username, $password, $database;
    $conn = new mysqli($host, $username, $password, $database);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

?>