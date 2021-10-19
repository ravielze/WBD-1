<?php
include "utils/method_checker.php";
include "database/connection.php";
AllowedMethod("POST");
$data = json_decode($_POST["data"], true);
if (isset($data["username"])){
    $c = ConnectDatabase();
    $stm = $c->prepare("SELECT * FROM users WHERE username = ?");
    $stm->execute([$data["username"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result !== false && $result["password"] === $data["password"]){
        http_response_code(200);
        setcookie("user", $result["username"], 3600, "/");
        echo json_encode($result);
    } else {
        http_response_code(404);
    }
    exit();
}
http_response_code(400);
?>