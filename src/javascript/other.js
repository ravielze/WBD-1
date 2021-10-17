import X from "./index.js";
import Axios from "./utils/AxiosBeLike.js";

X.a();
// Axios.Post(
//     "index.php",
//     { test: 123, a: "aaa", b: 10.02, c: ["1", "2", "3"], d: [1, 2, 3] },
//     function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("result").innerHTML = this.responseText;
//         } else if (this.status >= 400) {
//             document.getElementById("result").innerHTML = this.statusText;
//         }
//     }
// );

const params = {
    "q": "str"
}
Axios.Get("index.php", params).then((a) => console.log(a))
const data = { username: "abcdefghixx", password: "12345678", email: "abcde@gmail.com", is_admin: 0 }
Axios.Post("register.php", data).then(a => console.log(a))
// Axios.Post(
//     "register.php",
//     { username: "abcdefghixx", password: "12345678", email: "abcde@gmail.com", is_admin: 0 },
//     function () {
//         if (this.readyState == 4 && this.status == 200) {
//             //const obj = JSON.parse(this.responseText);
//             //console.log(obj);
//             document.getElementById("result").innerHTML = this.responseText;
//         } else if (this.status >= 400) {
//             document.getElementById("result").innerHTML = this.statusText;
//         }
//     }
// );
