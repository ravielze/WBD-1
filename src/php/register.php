<?php
include "utils/method_checker.php";
include "utils/key_checker.php";
include "database/connection.php";
AllowedMethod("POST");
$data = json_decode($_POST["data"], true);
if (KeyCheck($data, ["username", "email", "password", "is_admin"])
&& IsLength($data, array("username"=>4, "email"=>4, "password"=>8)) && IsNumeric($data, ["is_admin"])){
    $c = ConnectDatabase();

    $stm = $c->prepare("SELECT email FROM users WHERE email = ?");
    $stm->execute([$data["email"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result !== false){
        echo json_encode(array("status"=>false,"data"=>"email already exists"));
        exit();
    }

    $stm = $c->prepare("SELECT username FROM users WHERE username = ?");
    $stm->execute([$data["username"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result !== false){
        echo json_encode(array("status"=>false,"data"=>"username already exists"));
        exit();
    }

    try {
        $stm = $c->prepare("INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)");
        $stm->bindValue(1, $data["username"], PDO::PARAM_STR);
        $stm->bindValue(2, $data["email"], PDO::PARAM_STR);
        $stm->bindValue(3, $data["password"], PDO::PARAM_STR);
        $stm->bindValue(4, $data["is_admin"], PDO::PARAM_BOOL);
        $stm->execute();
        echo json_encode(array("status"=>true));
    } catch (PDOException $e) {
        http_response_code(500);
    }
    exit();
}
http_response_code(400);
?>