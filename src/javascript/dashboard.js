import { renderProducts } from './utils/RenderProducts.js';

// Dummy Dorayakis
// Later will be implemented by fetching data
// from sqlite
import tempDorayakis from './shared/Dorayakis.js';

for (let i = 0; i < 2; i++) {
  renderProducts(tempDorayakis);
}
