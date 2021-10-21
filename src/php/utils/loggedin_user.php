<?php

    function GetLoggedInUser() {
        $c = ConnectDatabase();
        if (!isset($_COOKIE["user"])) {
            return null;
        }

        $stm = $c->prepare("SELECT * FROM users WHERE username = ?");
        $stm->execute([$_COOKIE["user"]]);
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        return $result;
    }
?>