import X from "./index.js";
import Axios from "./utils/AxiosBeLike.js";

X.a();
Axios.Post("register.php", {
    username: "abcdefghixx",
    password: "12345678",
    email: "abcde@gmail.com",
    is_admin: 0,
})
    .then((res) => {
        document.getElementById("result").innerHTML = res;
    })
    .catch((err) => {
        document.getElementById("result").innerHTML = err;
    });
