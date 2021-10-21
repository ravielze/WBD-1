<?php
include "utils/method_checker.php";
include "utils/key_checker.php";
include "database/connection.php";
AllowedMethod("GET");

$c = ConnectDatabase();
$q = $c->query("SELECT * FROM dorayakis");
$result = $q->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>