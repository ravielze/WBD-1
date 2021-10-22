import { renderProducts } from './utils/RenderProducts.js';
import Axios from './utils/AxiosBeLike.js';

// Dummy Dorayakis
// Later will be implemented by fetching data
// from sqlite
/**
 * TEMPORARY RENDERER
 */
// import tempDorayakis from './shared/Dorayakis.js';

// renderProducts(tempDorayakis);

/**
 * MAIN RENDERER
 */
function getAllDorayakis() {
  return Axios.Get('products/dashboard.php').then((res) => JSON.parse(res));
}

getAllDorayakis()
  .then((dorayakis) => {
    renderProducts(dorayakis);
  })
  .catch((err) => console.log(err));
