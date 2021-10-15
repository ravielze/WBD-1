<?php
include "table.php";

function ConnectDatabase() {
    global $users, $dorayakis, $histories;
    $db = new PDO("sqlite:/data/db.sqlite3");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if ($db == null) {
        die("Connection failed");
    } else {
        $db->exec($users);
        $db->exec($dorayakis);
        $db->exec($histories);
    }
    return $db;
}

?>