import { createImg } from './utils/CreateImg.js';
import Dorayakis from './shared/Dorayakis.js';

// Admin and dorayaki should
// be fetched from db and
// user session
const dorayaki = Dorayakis[1];
const isAdmin = true;

// Append img to left container
const img = createImg(dorayaki.picture, dorayaki.name);
img.className = 'product-image';
document.querySelector('#imgContainer').append(img);

// Append items to description box
const descBox = document.querySelector('#descBox');

// Product name
const productName = document.createElement('h1');
productName.className = 'gutterbottom';
productName.innerHTML = dorayaki.name;

// Product description
const productDesc = document.createElement('p');
productDesc.className = 'gutterbottom-2';
productDesc.innerHTML = dorayaki.description;

// Product price
const productPrice = document.createElement('h3');
productPrice.className = 'gutterbottom';
productPrice.innerHTML = `Rp${dorayaki.price}`;

// Product stock
const productStock = document.createElement('p');
productStock.className = 'gutterbottom-2';
productStock.innerHTML = `${dorayaki.stock} stocks left`;

// List of Buttons
const btnList = document.createElement('ul');
btnList.className = 'button-list';

// Buy button
const buyBtn = document.createElement('li');
buyBtn.className = 'buy-btn';
buyBtn.innerHTML = `<button class="btn btn-primary">Beli</button>`;

// Edit button
const editBtn = document.createElement('li');
editBtn.className = 'btn-icon';
editBtn.id = 'btn-edit';
editBtn.innerHTML = `<i class="far fa-edit fa-lg"></i>`;

// Delete button
const deleteBtn = document.createElement('li');
deleteBtn.className = 'btn-icon';
deleteBtn.id = 'btn-delete';
deleteBtn.innerHTML = `<i class="far fa-trash-alt fa-lg"></i>`;

// Append buttons to list of buttons
btnList.append(buyBtn);

if (isAdmin) {
  btnList.append(editBtn);
  btnList.append(deleteBtn);
}

// Append all to description box
console.log(descBox);
console.log(productName);
descBox.appendChild(productName);
descBox.append(productDesc);
descBox.append(productPrice);
descBox.append(productStock);
descBox.append(btnList);
