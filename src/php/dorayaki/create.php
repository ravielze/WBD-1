<?php
include "../utils/method_checker.php";
include "../utils/key_checker.php";
include "../database/connection.php";
AllowedMethod("POST");

$data = json_decode($_POST["data"], true);
if (!(KeyCheck($data, ["name", "description", "price", "stock"])
    && IsLength($data, array("name" => 4, "description" => 8)))) {
    echo json_encode(array("status" => false));
    exit();
}

$fileURL = "https://i.ibb.co/D5dMHjR/dorayaki.png";
$imgBBAPIKey = $_ENV["IMGBB_API_KEY"];
if ($_FILES['image']['name'] != '') {
    if (filesize($_FILES['image']['tmp_name']) <= 10 * 1024 * 1024) {
        $fileContent = file_get_contents($_FILES['image']['tmp_name']);

        $imgBBParameter = array(
            "image" => base64_encode($fileContent),
            "key" => $imgBBAPIKey
        );

        $options = array(
            "http" => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                "method" => "POST",
                "content" => http_build_query($imgBBParameter)
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents("https://api.imgbb.com/1/upload", false, $context);
        if ($result !== FALSE) {
            $imgBBResponse = json_decode($result, true);
            $fileURL = $imgBBResponse["data"]["display_url"];
        }
    }
}

$c = ConnectDatabase();
try {
    $stm = $c->prepare("INSERT INTO dorayakis (name, description, picture, price, stock) VALUES (?, ?, ?, ?, ?)");
    $stm->bindValue(1, $data["name"], PDO::PARAM_STR);
    $stm->bindValue(2, $data["description"], PDO::PARAM_STR);
    $stm->bindValue(3, $fileURL, PDO::PARAM_STR);
    $stm->bindValue(4, $data["price"], PDO::PARAM_INT);
    $stm->bindValue(5, $data["stock"], PDO::PARAM_INT);
    $stm->execute();
    echo json_encode(array("status" => true));
    exit();
} catch (PDOException $e) {
    http_response_code(500);
}
echo json_encode(array("status" => false));
