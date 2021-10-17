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
    if ($result !== false){
        http_response_code(200);
        echo json_encode($result);
    } else {
        http_response_code(404);
    }
    exit();
}
http_response_code(400);
?>