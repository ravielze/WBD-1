<?php
include "../utils/method_checker.php";
include "../utils/key_checker.php";
include "../database/connection.php";

AllowedMethod("GET");
$c = ConnectDatabase();

$itemsPerPage = 10;
$page = isset($_GET["page"]) ? $_GET["page"] : 1;

$query = $c->prepare("SELECT u.username as
 username, d.name as dorayaki, amount, flag FROM histories h 
 INNER JOIN dorayakis d ON d.id_dorayaki = h.id_dorayaki INNER 
 JOIN users u ON h.id_modified_by = u.id_user LIMIT ? OFFSET ?");
$query->execute([$itemsPerPage, ($page - 1) * $itemsPerPage]);

$countQuery = $c->query("SELECT count(id_history) as total_history FROM histories");
$result = $query->fetchAll(PDO::FETCH_ASSOC);
$count = $countQuery->fetch(PDO::FETCH_ASSOC);
if ($result !== false) {
    for ($i = 0; $i < count($result); $i++) {
        switch ($result[$i]["flag"]) {
            case "+":
                $result[$i]["flag"] = "Admin increase stock";
                break;
            case "-":
                $result[$i]["flag"] = "Admin decrease stock";
                break;
            case "buy":
                $result[$i]["flag"] = "Buy dorayaki";
                break;
        }
    }
    $total = (int) $count["total_history"];
    $response = array("data" => $result, "total_page" => ceil($total / $itemsPerPage), "items_per_page" => $itemsPerPage);
    echo json_encode($response);
}