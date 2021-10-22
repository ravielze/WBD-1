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
    <meta name="viewport" content="initial-scale=1.0" />
    <title>History</title>
    <link rel="stylesheet" href="/styles/base.css" />
    <link rel="stylesheet" href="/styles/history.css" />
  </head>
  <body>
    <?php include "./php/components/navbar.php" ?>
    <div class="main-container" id="main-container">
      <table id="table">
        <tr>
          <th>Username</th>
          <th>Dorayaki</th>
          <th>Action</th>
          <th>Amount</th>
        </tr>
      </table>
    </div>
    <script src="../javascript/history.js" type="module"></script>
  </body>
</html>
