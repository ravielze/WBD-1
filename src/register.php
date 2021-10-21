<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0" />
        <title>Register</title>
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
                    <input type="text" id="email" class="form-input" placeholder="Email" />
                </div>
                <div>
                    <input
                        type="password"
                        class="form-input"
                        placeholder="Password"
                        id="password"
                    />
                </div>
                <span id="error-text"></span>
                <div class="button" id="signup"><p>Sign Up</p></div>
                <p id="extra-text">Already have an account? Sign In</p>
            </div>
        </div>
    </body>
</html>
