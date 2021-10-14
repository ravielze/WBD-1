import X from "./index.js";
import Axios from "./utils/AxiosBeLike.js";

X.a();
Axios.Post(
    "index.php",
    { test: 123, a: "aaa", b: 10.02, c: ["1", "2", "3"], d: [1, 2, 3] },
    function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        } else if (this.status >= 400) {
            document.getElementById("result").innerHTML = this.statusText;
        }
    }
);
