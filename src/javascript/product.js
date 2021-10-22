import { createImg } from "./utils/CreateImg.js"
import Axios from "./utils/AxiosBeLike.js"

// Admin and dorayaki should
// be fetched from db and
// user session
function getParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ""
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}
/**
 * MAIN RENDERER
 */
const GetProductById = (id) =>
  Axios.Get("products/product.php", { id }).then((res) => JSON.parse(res))

GetProductById(parseInt(getParameterByName("pid"))).then((dorayaki) => {
  // const dorayaki = Dorayakis[parseInt(getParameterByName('pid'))];
  const isAdmin = true

  // Append img to left container
  const img = createImg(dorayaki.picture, dorayaki.name) // TEMP
  img.className = "product-image"
  document.querySelector("#imgContainer").append(img)

  // Append items to description box
  const descBox = document.querySelector("#descBox")

  // Product name
  const productName = document.createElement("h1")
  productName.className = "gutterbottom"
  productName.innerHTML = dorayaki.name // TEMP

  // Product description
  const productDesc = document.createElement("p")
  productDesc.className = "gutterbottom-2"
  productDesc.innerHTML = dorayaki.description // TEMP

  // Product price
  const productPrice = document.createElement("h3")
  productPrice.className = "gutterbottom"
  productPrice.innerHTML = `Rp${dorayaki.price}` // TEMP

  // Product stock
  const productStock = document.createElement("p")
  productStock.className = "gutterbottom-2"
  productStock.innerHTML = `${dorayaki.stock} stocks left` // TEMP

  // // List of Buttons
  // const btnList = document.createElement('ul');
  // btnList.className = 'button-list';

  // // Buy button
  // const buyBtn = document.createElement('li');
  // buyBtn.className = 'buy-btn';
  // buyBtn.innerHTML = `<button class="btn btn-primary">Beli</button>`;
  // buyBtn.onclick = () => {
  //   location.href = '/purchase.php'
  // }

  // // Edit button
  // const editBtn = document.createElement('li');
  // editBtn.className = 'btn-icon';
  // editBtn.id = 'btn-edit';
  // editBtn.innerHTML = `<i class="far fa-edit fa-lg"></i>`;

  // // Delete button
  // const deleteBtn = document.createElement('li');
  // deleteBtn.className = 'btn-icon';
  // deleteBtn.id = 'btn-delete';
  // deleteBtn.innerHTML = `<i class="far fa-trash-alt fa-lg"></i>`;

  // // Append buttons to list of buttons
  // btnList.append(buyBtn);

  // if (isAdmin) {
  //   btnList.append(editBtn);
  //   btnList.append(deleteBtn);
  // }

  // Append all to description box

  descBox.appendChild(productName)
  descBox.append(productDesc)
  descBox.append(productPrice)
  descBox.append(productStock)
  // descBox.append(btnList);
})

/**
 * TEMPORARY RENDERER
 */
const deleteBtn = document.getElementById("btn-delete")
if (deleteBtn !== null) {
  deleteBtn.onclick = () => {
    alert("Sorry feature not implemented")
  }
}
