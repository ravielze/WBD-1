import { renderProducts } from './utils/RenderProducts.js';
import Axios from './utils/AxiosBeLike.js';

// Dummy Dorayakis
// Later will be implemented by fetching data
// from sqlite
import tempDorayakis from './shared/Dorayakis.js';

// Get all dorayakis
function getAllStock() {
  return Axios.Get('products/searchpage.php').then((res) => JSON.parse(res));
}
// const getAllStock = () =>
//   Axios.Get('products/searchpage.php').then((allStock) => JSON.parse(allStock));

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

let endResult;
let numberOfPages;

getAllStock()
  //Filter dorayakis
  .then((dorayakiList) =>
    dorayakiList.filter((item) => item.dorayaki.toUpperCase().indexOf(query) > -1)
  )
  .then((filteredDorayakis) => {
    const results = [];
    numberOfPages = Math.floor(filteredDorayakis.length / 8);
    numberOfPages += filteredDorayakis.length % 8 > 0 ? 1 : 0;
    let idx = 0;
    for (let pages = 0; pages < numberOfPages; pages++) {
      let pageItem = [];
      for (let items = 0; items < 8; items++) {
        pageItem.push(filteredDorayakis[idx]);
        idx++;
      }
      results.push(pageItem);
    }
    console.log(results)
    endResult  = results;
  }).then(result => {
    renderPage(1)
  }).then(() => {
   console.log(numberOfPages)
   const paginationBox = document.querySelector('#paginationBox')
   for (let page = 1; page <= numberOfPages; page++) {
      const paginationItem = document.createElement('div');
      paginationItem.className = 'pagination-item';
      paginationItem.innerHTML = `${page}`
      paginationItem.onclick = () => {
        renderPage(page)
      }
      paginationBox.append(paginationItem)
   }
  })

function renderPage(pagenum) {
  document.querySelector('#product-content').innerHTML = ''
  renderProducts(endResult[pagenum-1])
}

// Create paginations


// Filter products by query input
// const searchResult = tempDorayakis.filter(
//   (item) => item.name.toUpperCase().indexOf(query) > -1
// );

h1.innerHTML = `Showing search result for "${query}"`;

// console.log(searchResult);
// renderProducts(searchResult);
