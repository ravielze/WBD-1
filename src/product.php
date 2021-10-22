<?php
include "./php/logged_in.php";
if (!isLoggedIn()) {
  header("location: /login.php");
}
$user = WhosLoggedIn();
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
        <div class="description-box">
          <div id="descBox">

          </div>
          <!-- Contents -->
          <ul class="button-list">
          <?php 
            if ($user["is_admin"]) {
              echo '<li class="buy-btn"><a href="/admin/stock.php"><button class="btn btn-primary">Update</button></a></li>';
              echo '<li class="btn-icon" id="btn-delete"><i class="far fa-trash-alt fa-lg"></i></li>';
            } else {
              echo '<li class="buy-btn"><a href="/purchase.php"><button class="btn btn-primary">Beli</button></a></li>';
            }
          ?>
          </ul>
        </div>
      </div>
    </main>
  </body>
  <script type="module" src="./javascript/product.js"></script>
  
  <!-- <script type="text/javascript" src="./javascript/product_admin.js"></script> -->
</html>
