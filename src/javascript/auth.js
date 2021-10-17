import Axios from "./utils/AxiosBeLike.js";
const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const isAdminField = document.getElementById("isAdmin");
const passwordField = document.getElementById("password");

const Register = () => {
    const data = {
        username: usernameField.value,
        password: passwordField.value,
        email: emailField.value,
        is_admin: isAdminField.checked ? 1 : 0,
    };
    Axios.Post("register.php", data, function () {
        console.log(this.statusText);
    });
};

if (document.title === "Register") {
    usernameField.oninput = function () {
        console.log(this.value);
    };
    usernameField.onkeyup = function (event) {
        if (event.key === "Enter") {
            Register();
        }
    };
    isAdminField.onchange = function () {
        console.log(isAdminField.checked);
    };
}
