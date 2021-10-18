// import Dorayakis from './shared/Dorayakis';

// Dummy Dorayakis
// Later will be implemented by fetching data
// from sqlite
const tempDorayakis = [
  {
    id_dorayaki: 0,
    name: 'DoraCoklat',
    description: 'Rasa coklat enak bgt',
    picture: './img/dorayaki.png',
    price: 99000,
    stock: 99,
    is_deleted: 0,
  },
  {
    id_dorayaki: 1,
    name: 'DoraVanilla',
    description: 'Cream vanilla putih',
    picture: './img/dorayaki2.png',
    price: 99000,
    stock: 99,
    is_deleted: 0,
  },
  {
    id_dorayaki: 2,
    name: 'DoraStroberi',
    description: 'Rasakan keseruan stroberi pilihan',
    picture: './img/dorayaki3.png',
    price: 99000,
    stock: 99,
    is_deleted: 0,
  },
];

function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  if (alt != null) img.alt = alt;
  return img;
}

const productContent = document.getElementById('product-content');

for (let i = 0; i < 2; i++) {
  tempDorayakis.map((item) => {
    // Create all required parent elements
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    const productCard = document.createElement('figure');
    productCard.className = 'product-card';

    const img = createImg(item.picture, item.name);

    const cardText = document.createElement('figcaption');
    cardText.className = 'card-text';
    cardText.innerHTML = `\
    <h3>${item.name}</h3>\
    <p>${item.description}</p>\
    <p>Stok tersedia: ${item.stock}</p>
    `;

    // Append from child to parents
    productCard.append(img);
    productCard.append(cardText);

    cardContainer.append(productCard);

    productContent.append(cardContainer);
  });
}
