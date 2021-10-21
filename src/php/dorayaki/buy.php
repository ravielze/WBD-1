<?php
include "utils/method_checker.php";
include "utils/key_checker.php";
include "database/connection.php";
AllowedMethod("POST");

$requiredField = ["id", "amount"];
function sendResponse($statusCode, $data) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}
$c = ConnectDatabase();
$idModifiedBy = 1;
$data = $_POST["data"];
$updateQuery = $c->prepare("UPDATE dorayakis SET stock = stock - ? WHERE id_dorayaki = ?");
$appendHistoryQuery = $c->prepare("INSERT INTO histories (amount, flag, id_modified_by, id_dorayaki) VALUES (?, ?, ?, ?)");
if (isset($data)) {
    $data = json_decode($data, true);
    foreach($data as $d) {
        if (!KeyCheck($d, $requiredField)) {
            sendResponse(400, array('status' => 400, "detail" => "Uncompatible request body"));
        }
    }
    foreach($data as $d) {
        if ($d["amount"] > 0) {
            try {
                $action = "buy";
                $updateQuery->execute([$d["amount"], $d['id']]);
                $appendHistoryQuery->execute([$d["amount"], $action, $idModifiedBy, $d["id"]]);
            } catch (Exception $e) {
                sendResponse(400, array('status' => 400, 'detail' => $e->getMessage()));
            }
        }
    }
    sendResponse(200, array("message" => "update success"));
}

?>