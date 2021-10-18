<?php
include "utils/method_checker.php";
include "utils/key_checker.php";
include "database/connection.php";
AllowedMethod("GET");
if (isset($_GET["email"])){
    $c = ConnectDatabase();
    $stm = $c->prepare("SELECT * FROM users WHERE email = ?");
    $stm->execute([$_GET["email"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result !== false || strlen($_GET["email"]) < 4){
        echo json_encode(array("email"=>$_GET["email"], "status"=>false));
    } else {
        echo json_encode(array("email"=>$_GET["email"], "status"=>true));
    }
    exit();
}
http_response_code(400);
?>