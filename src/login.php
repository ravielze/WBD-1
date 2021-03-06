<?php 
include_once "./php/logged_in.php";
if (isLoggedIn()) {
    header("location: /dashboard.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="initial-scale=1.0" />
    <title>Login</title>
    <link rel="stylesheet" href="styles/auth.css" />
    <script type="module" src="javascript/auth.js"></script>
</head>

<body>
    <div class="auth-overlay">
        <div class="auth-container">
            <img src="img/dorayaki.png" />
            <h3>Doraemonangis Store</h3>
            <div>
                <input type="text" id="username" class="form-input" placeholder="Username" />
            </div>
            <div>
                <input type="password" class="form-input" placeholder="Password" id="password" />
            </div>
            <span id="error-text"></span>
            <div class="button" id="signin">
                <p>Sign In</p>
            </div>
            <p id="extra-text">Don’t have an account? Sign Up</p>
        </div>
    </div>
</body>

</html>