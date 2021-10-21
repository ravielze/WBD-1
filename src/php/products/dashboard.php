<?php 
include "../utils/method_checker.php";
AllowedMethod("GET");

$c = ConnectDatabase();
$q = $c->query("SELECT d.id_dorayaki AS id, d.name AS dorayaki,
d.description AS descript, d.picture AS picture, SUM(amount) as amount
FROM dorayakis d INNER JOIN histories h ON d.id_dorayaki = h.id_dorayaki
GROUP BY d.id_dorayaki
DESC LIMIT 8");
$result = $q->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>