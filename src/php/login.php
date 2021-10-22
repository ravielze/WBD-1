<?php
include "utils/method_checker.php";
include "database/connection.php";
include "utils/key_checker.php";
AllowedMethod("POST");
$data = json_decode($_POST["data"], true);
if (
    KeyCheck($data, ["username", "password"])
    && IsLength($data, array("username" => 4, "password" => 8))
) {
    $c = ConnectDatabase();
    $stm = $c->prepare("SELECT * FROM users WHERE username = ?");
    $stm->execute([$data["username"]]);
    $result = $stm->fetch(PDO::FETCH_ASSOC);
    if ($result !== false && password_verify($data["password"], $result["password"])) {
        $uniqueID = strval($result["id_user"]) . "-" . uniqid("", true) . "-" . md5($result["username"]);
        setcookie("token", $uniqueID, time() + 3600, "/", httponly: true);
        setcookie("user", $result["username"], time() + 3600, "/", httponly: true);
        $c->exec("UPDATE users SET access_id = '" . $uniqueID . "' WHERE id_user = " . $result["id_user"]);
        echo json_encode(array("status" => true, "data" => $result));
    } else {
        echo json_encode(array("status" => false));
    }
    exit();
}
http_response_code(400);
