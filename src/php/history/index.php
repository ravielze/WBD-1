<?php
include "../utils/method_checker.php";
include "../utils/key_checker.php";
include "../utils/loggedin_user.php";
include "../database/connection.php";
include "../logged_in.php";

AllowedMethod("GET");
$c = ConnectDatabase();
$loggedInUser = WhosLoggedIn();
$itemsPerPage = 10;
$page = isset($_GET["page"]) ? $_GET["page"] : 1;

$q = "SELECT u.username as
username, d.name as dorayaki, amount, flag FROM histories h 
INNER JOIN dorayakis d ON d.id_dorayaki = h.id_dorayaki INNER 
JOIN users u ON h.id_modified_by = u.id_user";

$cq = "SELECT count(id_history) as total_history FROM histories";

if (isset($loggedInUser["is_admin"]) && !$loggedInUser["is_admin"]) {
    $q .= " WHERE u.id_user = ?";
    $cq .= " WHERE id_modified_by = ?";
}
$q .= " LIMIT ? OFFSET ?";

$query = $c->prepare($q);
$countQuery = $c->prepare($cq);

if (isset($loggedInUser["is_admin"]) && !$loggedInUser["is_admin"]) {
    $query->execute([$loggedInUser["id_user"], $itemsPerPage, ($page - 1) * $itemsPerPage]);
    $countQuery->execute([$loggedInUser["id_user"]]);
} else {
    $query->execute([$itemsPerPage, ($page - 1) * $itemsPerPage]);
    $countQuery->execute([]);
}

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