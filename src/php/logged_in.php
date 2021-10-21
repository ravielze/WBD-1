<?php

include "database/connection.php";
function isLoggedIn()
{
    if (!isset($_COOKIE["user"]) || !isset($_COOKIE["token"])) {
        return false;
    }
    $c = ConnectDatabase();
    $stm = $c->prepare("SELECT * FROM users WHERE username = ?");
    $stm->execute([$_COOKIE["user"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result["access_id"] != $_COOKIE["token"]) {
        return false;
    }
    return true;
}

function &WhosLoggedIn()
{
    if (!isset($_COOKIE["user"]) || !isset($_COOKIE["token"])) {
        return array();
    }
    $c = ConnectDatabase();
    $stm = $c->prepare("SELECT * FROM users WHERE username = ?");
    $stm->execute([$_COOKIE["user"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result["access_id"] == $_COOKIE["token"]) {
        unset($result["access_id"]);
        unset($result["password"]);
        $result["is_admin"] = ($result["is_admin"] === "1");
        return $result;
    }
    return array();
}
