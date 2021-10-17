import Axios from "./utils/AxiosBeLike.js";
const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const Register = () => {
    const data = {
        username: usernameField.value,
        password: passwordField.value,
        email: emailField.value,
        is_admin: 0,
    };
    Axios.Post("register.php", data, function () {
        console.log(this.statusText);
    });
};

const extraTextRedirect = document.getElementById("extra-text");
if (document.title === "Register") {
    extraTextRedirect.onclick = function () {
        window.location.href = "/login.html";
    };
} else if (document.title === "Login") {
    extraTextRedirect.onclick = function () {
        window.location.href = "/register.html";
    };
}
