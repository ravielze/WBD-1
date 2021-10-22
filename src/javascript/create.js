const nameField = document.getElementById("name");
const fileField = document.getElementById("file");
const descriptionField = document.getElementById("description");
const priceField = document.getElementById("price");
const stockField = document.getElementById("stock");
const errorText = document.getElementById("error-text");
const createButton = document.getElementById("create");
import Axios from "./utils/AxiosBeLike.js";

const resetForm = () => {
    nameField.value = "";
    fileField.value = null;
    descriptionField.value = "";
    stockField.value = 0;
    priceField.value = 0;
};
const MakeErrorMessage = (text) => {
    errorText.innerHTML = text;
    errorText.classList.add("wiggle");
    setTimeout(() => {
        errorText.classList.remove("wiggle");
    }, 5500);
};

let buttonDisabled = false;

createButton.onclick = function () {
    if (buttonDisabled) {
        return;
    }
    buttonDisabled = true;
    const data = {
        name: nameField.value,
        description: descriptionField.value,
        price: priceField.value,
        stock: stockField.value,
    };
    const formData = new FormData();
    formData.set("image", fileField.files[0]);
    formData.set("data", JSON.stringify(data));
    Axios.PostFormData("dorayaki/create.php", formData)
        .then((res) => JSON.parse(res))
        .then((obj) => {
            if (obj.status) {
                MakeErrorMessage("Successfull added!");
            } else {
                MakeErrorMessage("Please try again!");
            }
            buttonDisabled = false;
        });
    MakeErrorMessage("Please wait...");
    resetForm();
};
