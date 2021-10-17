<?php
include "utils/method_checker.php";
include "utils/key_checker.php";
include "database/connection.php";
AllowedMethod("GET");
if (isset($_GET["username"])){
    $c = ConnectDatabase();
    $stm = $c->prepare("SELECT * FROM users WHERE username = ?");
    $stm->execute([$_GET["username"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result !== false || strlen($_GET["username"]) < 4){
        echo json_encode(array("username"=>$_GET["username"], "status"=>false));
    } else {
        echo json_encode(array("username"=>$_GET["username"], "status"=>true));
    }
    exit();
}
http_response_code(400);
?>