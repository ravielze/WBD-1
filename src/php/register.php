<?php
include "utils/method_checker.php";
include "utils/key_checker.php";
include "database/connection.php";
AllowedMethod("POST");
$data = json_decode($_POST["data"], true);
if (KeyCheck($data, ["username", "email", "password", "is_admin"])
&& IsLength($data, array("username"=>4, "email"=>4, "password"=>8)) && IsNumeric($data, ["is_admin"])){
    $c = ConnectDatabase();
    try {
        $stm = $c->prepare("INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)");
        $stm->bindValue(1, $data["username"], PDO::PARAM_STR);
        $stm->bindValue(2, $data["email"], PDO::PARAM_STR);
        $stm->bindValue(3, $data["password"], PDO::PARAM_STR);
        $stm->bindValue(4, $data["is_admin"], PDO::PARAM_BOOL);
        $stm->execute();
    } catch (PDOException $e) {
        http_response_code(500);
    }
    exit();
}
http_response_code(400);
?>