import { createImg } from './CreateImg.js';

const productContent = document.getElementById('product-content');

export function renderProducts(array) {
  array.map((item) => {
    // Create all required parent elements
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    const productCard = document.createElement('figure');
    productCard.className = 'product-card';

    const img = createImg(item.picture, item.name); // CHANGE THIS TO item.dorayaki FOR REAL RENDERING

    const cardText = document.createElement('figcaption');
    cardText.className = 'card-text';
    cardText.innerHTML = `\
    <h3>${item.name}</h3>\ 
    <p>${item.description}</p>\
    <p>Stok tersedia: ${item.stock}</p>
    `; // CHANGE THIS TO item.dorayaki, item.descript, item.amount FOR REAL RENDERING

    // Append from child to parents
    productCard.append(img);
    productCard.append(cardText);
    productCard.onclick = () => {
      location.href = `./product.html?pid=${item.id_dorayaki}`; // CHANGE THIS TO item.dorayaki FOR REAL RENDERING
    };

    cardContainer.append(productCard);

    productContent.append(cardContainer);
  });
}
