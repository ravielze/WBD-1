<?php 
include "../utils/method_checker.php";
include "../database/connection.php";
AllowedMethod("GET");

$itemId = $_GET["id"];

$c = ConnectDatabase();
$stm = $c->prepare("SELECT *
FROM dorayakis d
WHERE d.id_dorayaki = ?");
$stm->execute([$itemId]);
$result = $stm->fetch(PDO::FETCH_ASSOC);
echo json_encode($result);

// INNER JOIN histories h ON d.id_dorayaki = h.id_dorayaki

?>