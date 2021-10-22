<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/dashboard.css" />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>
  <body>
    <!-- Navbar -->
    <?php include "./php/components/navbar.php" ?>

    <!-- Content -->
    <main>
      <h1>Produk</h1>
      <div id="product-content">
        <!-- Cards rendered here -->
      </div>
    </main>
  </body>
  <script type="module" src="./javascript/dashboard.js"></script>
</html>
