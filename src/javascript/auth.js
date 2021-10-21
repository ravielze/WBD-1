import Axios from "./utils/AxiosBeLike.js";
const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const signupButton = document.getElementById("signup");
const signinButton = document.getElementById("signin");
const extraTextRedirect = document.getElementById("extra-text");
const errorText = document.getElementById("error-text");

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateUsername(username) {
    const re = /^[a-zA-Z0-9\-\_]+$/;
    return re.test(String(username));
}

const Register = () => {
    const data = {
        username: usernameField.value,
        password: passwordField.value,
        email: emailField.value,
        is_admin: 0,
    };
    Axios.Post("register.php", data)
        .then((res) => JSON.parse(res))
        .then((obj) => {
            if (obj.status) {
                alert("Successfully Registered!");
                usernameField.value = "";
                passwordField.value = "";
                emailField.value = "";
                passwordField.classList.remove("form-input-ok", "form-input-not-ok");
                usernameField.classList.remove("form-input-ok", "form-input-not-ok");
                emailField.classList.remove("form-input-ok", "form-input-not-ok");
            } else {
                alert("Register fail");
            }
        })
        .catch((err) => console.log(err));
};

const Login = () => {
    const data = {
        username: usernameField.value,
        password: passwordField.value,
    };
    Axios.Post("login.php", data)
        .then((res) => JSON.parse(res))
        .then((obj) => {
            if (obj.status) {
                usernameField.value = "";
                passwordField.value = "";
                passwordField.classList.remove("form-input-ok", "form-input-not-ok");
                usernameField.classList.remove("form-input-ok", "form-input-not-ok");
            } else {
                MakeErrorMessage("Wrong password or username. Failed to login.");
            }
        })
        .catch((err) => console.log(err));
};

const CheckUsername = () => {
    if (!validateUsername(usernameField.value)) {
        usernameField.classList.remove("form-input-ok", "form-input-not-ok");
        usernameField.classList.add("form-input-not-ok");
        return;
    }
    const data = {
        username: usernameField.value,
    };

    Axios.Get("check_username.php", data)
        .then((res) => JSON.parse(res))
        .then((obj) => {
            if (obj.status) {
                usernameField.classList.remove("form-input-ok", "form-input-not-ok");
                usernameField.classList.add("form-input-ok");
            } else {
                usernameField.classList.remove("form-input-ok", "form-input-not-ok");
                usernameField.classList.add("form-input-not-ok");
            }
        })
        .catch((err) => console.log(err));
};

const CheckEmail = () => {
    if (!validateEmail(emailField.value)) {
        emailField.classList.remove("form-input-ok", "form-input-not-ok");
        emailField.classList.add("form-input-not-ok");
        return;
    }

    const data = {
        email: emailField.value,
    };

    Axios.Get("check_email.php", data)
        .then((res) => JSON.parse(res))

        .then((obj) => {
            if (obj.status) {
                emailField.classList.remove("form-input-ok", "form-input-not-ok");
                emailField.classList.add("form-input-ok");
            } else {
                emailField.classList.remove("form-input-ok", "form-input-not-ok");
                emailField.classList.add("form-input-not-ok");
            }
        })
        .catch((err) => console.log(err));
};

const MakeErrorMessage = (text) => {
    errorText.innerHTML = text;
    errorText.classList.add("wiggle");
    setTimeout(() => {
        errorText.classList.remove("wiggle");
    }, 800);
};

if (document.title === "Register") {
    extraTextRedirect.onclick = function () {
        window.location.href = "/login.php";
    };

    usernameField.oninput = function () {
        MakeErrorMessage("");
        CheckUsername();
    };
    emailField.oninput = function () {
        MakeErrorMessage("");
        CheckEmail();
    };
    signupButton.onclick = function () {
        if (usernameField.value.length < 4) {
            MakeErrorMessage("Username field is required. Minimum 4 characters.");
            return;
        }
        if (emailField.value.length < 4) {
            MakeErrorMessage("Email field is required. Minimum 4 characters.");
            return;
        }
        if (!validateEmail(emailField.value)) {
            MakeErrorMessage("Email is not a valid.");
            return;
        }
        if (!validateUsername(usernameField.value)) {
            MakeErrorMessage(
                "Username is not a valid. Allowed characters: A-Z, a-z, 0-9, a strip (-) and an underscore (_)"
            );
            return;
        }
        if (passwordField.value.length < 8) {
            MakeErrorMessage("Password field is required. Minimum 8 characters.");
            return;
        }
        const checkUsername = () => {
            const data = {
                username: usernameField.value,
            };
            return Axios.Get("check_username.php", data)
                .then((res) => JSON.parse(res))
                .then((obj) => {
                    return obj.status;
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });
        };

        const checkEmail = () => {
            const data = {
                email: emailField.value,
            };
            return Axios.Get("check_email.php", data)
                .then((res) => JSON.parse(res))
                .then((obj) => {
                    return obj.status;
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });
        };

        checkUsername()
            .then((ok) => {
                if (!ok) {
                    MakeErrorMessage("Username is not available. Please choose another.");
                    return false;
                }
                return true;
            })
            .then((ok) => {
                if (ok) {
                    checkEmail()
                        .then((ok) => {
                            if (!ok) {
                                MakeErrorMessage("Email is already registered.");
                                return false;
                            }
                            return true;
                        })
                        .then((ok) => {
                            if (ok) {
                                Register();
                            }
                        });
                }
            });
    };
    passwordField.oninput = function () {
        if (passwordField.value.length < 8) {
            passwordField.classList.remove("form-input-ok", "form-input-not-ok");
            passwordField.classList.add("form-input-not-ok");
        } else {
            passwordField.classList.remove("form-input-ok", "form-input-not-ok");
            passwordField.classList.add("form-input-ok");
        }
    };
} else if (document.title === "Login") {
    extraTextRedirect.onclick = function () {
        window.location.href = "/register.php";
    };
    passwordField.oninput = function () {
        if (passwordField.value.length < 8) {
            passwordField.classList.remove("form-input-ok", "form-input-not-ok");
            passwordField.classList.add("form-input-not-ok");
        } else {
            passwordField.classList.remove("form-input-ok", "form-input-not-ok");
            passwordField.classList.add("form-input-ok");
        }
    };
    signinButton.onclick = function () {
        if (usernameField.value.length < 4) {
            MakeErrorMessage("Username field is required. Minimum 4 characters.");
            return;
        }
        if (!validateUsername(usernameField.value)) {
            MakeErrorMessage(
                "Username is not a valid. Allowed characters: A-Z, a-z, 0-9, a strip (-) and an underscore (_)"
            );
            return;
        }
        if (passwordField.value.length < 8) {
            MakeErrorMessage("Password field is required. Minimum 8 characters.");
            return;
        }
        Login();
    };
}
