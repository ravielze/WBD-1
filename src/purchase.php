<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="initial-scale=1.0" />
    <title>Purchase</title>
    <link rel="stylesheet" href="/styles/base.css" />
    <link rel="stylesheet" href="/styles/stock.css" />
  </head>
  <body>
    <div class="main-container">
      <div class="container">
        <div class="left" id="left"></div>
        <div class="right">
          <div class="header">
            <h1>Total Pesanan</h1>
          </div>
          <div class="content">
            <p style="margin-bottom: 1em">
              <span>Total: </span><span id="total">0</span>
            </p>
            <button class="btn btn-primary update-btn" id="purchase-btn">
              Beli
            </button>
          </div>
        </div>
      </div>
    </div>
    <script src="../javascript/stock_user.js" type="module"></script>
  </body>
</html>
