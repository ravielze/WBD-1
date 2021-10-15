<?php

function ConnectDatabase() {
    $db = new PDO("sqlite:/data/db.sqlite3");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if ($db == null) {
        die("Connection failed");
    }
    return $db;
}

?>