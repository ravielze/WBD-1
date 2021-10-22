<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/dashboard.css" />
    <title>Document</title>
  </head>
  <body>
    <!-- Navbar -->
    <?php include "./php/components/navbar.php" ?>
    <!-- Content -->
    <main>
      <h1></h1>
      <div id="product-content">
        <!-- Cards rendered here -->
      </div>
      <div class="pagination-container">
        <div id="paginationBox">
          <!-- Pagination -->
        </div>
      </div>
    </main>
  </body>
  <script type="module" src="./javascript/searchpage.js"></script>
</html>
