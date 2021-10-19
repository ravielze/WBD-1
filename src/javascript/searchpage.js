import { renderProducts } from './utils/RenderProducts.js';

// Dummy Dorayakis
// Later will be implemented by fetching data
// from sqlite
import tempDorayakis from './shared/Dorayakis.js';

const h1 = document.querySelector('main>h1');

// Function that returns the string of the url parameter
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var query = getParameterByName('q').toUpperCase();

// Filter products by query input
const searchResult = tempDorayakis.filter(
  (item) => item.name.toUpperCase().indexOf(query) > -1
);

h1.innerHTML = `Showing search result for "${query}"`;

console.log(searchResult);
renderProducts(searchResult);
