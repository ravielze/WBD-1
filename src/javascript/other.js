import X from "./index.js";
import Axios from "./utils/AxiosBeLike.js";

X.a();
Axios.Post(
    "register.php",
    { username: "abcdefghixx", password: "12345678", email: "abcde@gmail.com", is_admin: 0 },
    function () {
        if (this.readyState == 4 && this.status == 200) {
            //const obj = JSON.parse(this.responseText);
            //console.log(obj);
            document.getElementById("result").innerHTML = this.responseText;
        } else if (this.status >= 400) {
            document.getElementById("result").innerHTML = this.statusText;
        }
    }
);
