<?php
include "utils/method_checker.php";
include "database/connection.php";
AllowedMethod("GET");

unset($_COOKIE['token']); 
setcookie('token', null, -1, '/'); 
unset($_COOKIE['user']); 
setcookie('user', null, -1, '/');
header("location: /login.php");