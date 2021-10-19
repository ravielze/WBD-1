function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  if (alt != null) img.alt = alt;
  return img;
}

const productContent = document.getElementById('product-content');

export function renderProducts(array) {
  array.map((item) => {
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
