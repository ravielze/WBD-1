<?php
include "./php/logged_in.php";

if (!isLoggedIn()) {
  header("location: /login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/dashboard.css" />
    <link rel="stylesheet" href="./styles/base.css" />
    <link rel="stylesheet" href="./styles/product.css" />

    <title>Document</title>
  </head>
  <body>
    <!-- Navbar -->
    <?php 
      include "./php/components/navbar.php";
    ?>
    <!-- Content -->
    <main class="main-container">
      <div class="image-container" id="imgContainer">
        <!-- Image -->
      </div>
      <div class="description-container">
        <div class="description-box" id="descBox">
          <!-- Contents -->
        </div>
      </div>
    </main>
  </body>
  <script type="module" src="./javascript/product.js"></script>
</html>
