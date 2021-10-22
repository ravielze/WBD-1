<?php
include_once dirname(__DIR__) . "/logged_in.php";
$user = WhosLoggedIn();
$isLoggedIn = isset($user["username"]);
?>
<link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossorigin="anonymous"
/>
<header>
  <nav>
    <ul>
      <li class="navitem">
        <a href="/dashboard.php" class="darkgreen"
          ><h2>Doraemonangis Store</h2></a
        >
      </li>
      <li class="navitem">
        <form action="/searchpage.php" method="GET" class="nav-searchbox">
          <input
            type="text"
            placeholder="Cari di sini ..."
            name="q"
            class="navinput"
          />
          <button type="submit" value="Submit" class="nav-submit">
            <i class="fas fa-search fa-lg darkgreen"></i>
          </button>
        </form>
      </li>
      <?php
        if (isset($user["is_admin"])) {
          if ($user["is_admin"]) {
            echo '<a class="navitem nav-icon" href="/admin/stock.php">
                    <i class="fas fa-warehouse fa-lg darkgreen"></i>
                  </a>';
            echo '<a class="navitem nav-icon" href="">
                    <i class="fas fa-plus fa-lg darkgreen"></i>
                  </a>';
          } else {
            echo '<a class="navitem nav-icon" href="/purchase.php">
                    <i class="fas fa-shopping-cart fa-lg darkgreen"></i>
                  </a>';
          }

          echo '<a class="navitem nav-icon" href="/history.php">
                  <i class="fas fa-history fa-lg darkgreen"></i>
                </a>';
          echo '<a class="navitem nav-icon">
                  <i class="fas fa-sign-out-alt fa-lg darkgreen"></i>
                </a>';
        }
      ?>
      <li class="navitem">
        <div class="hello-box">
          <?php 
            if ($isLoggedIn) {
              echo "<p>Hai, " . $user["username"] . "!</p>";
            } else {
              echo "<a href='/login.php'>Login</a>";
            }
           ?>
        </div>
      </li>
    </ul>
  </nav>
  <!--
    Style specifically only for navbar
   -->
  <style>
    :root {
      --darkgreen: #266679;
      --lightgreen: #8ed1c0;
      --orange: #f6a25a;
    }

    .darkgreen {
      color: var(--darkgreen);
    }

    .lightgreen {
      color: var(--lightgreen);
    }

    .orange {
      color: var(--orange);
    }

    /* Navbar */
    nav {
      padding: 1em;
      background-color: var(--lightgreen);
    }

    nav > ul {
      display: flex;
      align-items: center;
      list-style: none;
    }

    .navitem {
      margin: 0 0.5em;
    }

    .navitem:nth-child(2) {
      margin-left: auto;
    }

    li > a {
      text-decoration: none;
    }

    .nav-searchbox {
      position: relative;
      margin-right: 2em;
    }

    .navinput {
      border: none;
      outline: none;
      padding: 0.75em 0 0.75em 2.5em;
      border-radius: 1em;
      width: 100%;
    }

    .nav-submit {
      background: transparent;
      border: none;
      cursor: pointer;
      position: absolute;
      border: none;
      left: 0;
      top: 0;
      padding: 0.9em 0 0 0.6em;
    }

    .nav-icon {
      cursor: pointer;
      height: 42px;
      width: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 250ms;
      text-decoration: none;
    }

    .nav-icon:hover {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 100%;
    }

    .hello-box {
      cursor: default;
      padding: 0.75em 1em;
      background-color: var(--orange);
      color: white;
      border-radius: 12px;
    }

    .hello-box a {
      text-decoration: none;
    }

  </style>
</header>
