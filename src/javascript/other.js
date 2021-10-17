import X from "./index.js";
import Axios from "./utils/AxiosBeLike.js";

X.a();
Axios.Post("login.php", { username: "abc" }, function () {
    if (this.readyState == 4 && this.status == 200) {
        const obj = JSON.parse(this.responseText);
        console.log(obj);
    } else if (this.status >= 400) {
        document.getElementById("result").innerHTML = this.statusText;
    }
});
