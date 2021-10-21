import Axios from "./utils/AxiosBeLike.js"

const container = document.getElementById("left")
const total = document.getElementById("total")
const purchaseBtn = document.getElementById("purchase-btn")
let timeout = null
const stocks = {}
const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || {
  total: 0,
}
const StockCard = (props) => {
  let { stock } = props

  const container = document.createElement("div")
  container.classList.add("card")

  const Child = (stock) =>
    `<h3>${stock.name}</h3>
      <p style="margin: 0.2em 0">Rp. ${stock.price}</p>
      <div class="stock-container">
        <p class="stock-count">Current Stock: ${stock.stock}</p>
        <div class="stock-changer">
            <span class="op" id="min">-</span>
            <span id="stock_counter">${
              shoppingCart[stock["id_dorayaki"]]
                ? shoppingCart[stock["id_dorayaki"]]
                : 0
            }</span>
            <span class="op" id="plus">+</span>   
        </div>
    </div>`

  container.innerHTML = Child(stock)
  let stockCounter = container.querySelector("#stock_counter")
  const updateStockCounter = (count) => {
    const cur = parseInt(stockCounter.textContent)
    if (cur + count < 0 || cur + count > stock.stock) {
      return
    }
    stockCounter.textContent = cur + count
    if (!(stock["id_dorayaki"] in shoppingCart)) {
      shoppingCart[stock["id_dorayaki"]] = 0
    }
    shoppingCart[stock["id_dorayaki"]] += count
    shoppingCart["total"] += count * parseInt(stock.price)
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
    total.textContent = shoppingCart["total"]
  }

  const prepare = () => {
    container
      .querySelector("#plus")
      .addEventListener("click", () => updateStockCounter(1))
    container
      .querySelector("#min")
      .addEventListener("click", () => updateStockCounter(-1))
  }
  prepare()
  container.reset = () =>
    updateStockCounter(-1 * parseInt(stockCounter.textContent))

  container.update = (newStock) => {
    const temp = parseInt(stockCounter.textContent)
    container.innerHTML = Child(newStock)
    stockCounter = container.querySelector("#stock_counter")
    prepare()
    stockCounter.textContent = temp
    if (temp > parseInt(newStock.stock)) {
      updateStockCounter(parseInt(newStock.stock) - temp)
    }
    stock = newStock
  }
  return container
}

const polling = (fn, interval) => {
  const createTimeout = () => {
    timeout = setTimeout(() => {
      fn().then(() => createTimeout())
    }, interval)
  }
  createTimeout()
}

const getAllStock = () =>
  Axios.Get("all_stock.php").then((allStock) => JSON.parse(allStock))

const updateAllStock = () => {
  return getAllStock().then((allStock) => {
    allStock.forEach((stock) => {
      if (stock["id_dorayaki"] in stocks) {
        stocks[stock["id_dorayaki"]].update(stock)
      } else {
        const stockCard = StockCard({ stock })
        stocks[stock["id_dorayaki"]] = stockCard
        container.appendChild(stockCard)
      }
    })
  })
}

window.onload = () => {
  getAllStock().then((allStock) => {
    allStock.forEach((stock) => {
      const stockCard = StockCard({ stock })
      stocks[stock["id_dorayaki"]] = stockCard
      container.appendChild(stockCard)
    })
  })

  purchaseBtn.onclick = () => {
    const request = []
    for (let key in shoppingCart) {
      if (key !== "total") {
        request.push({
          id: key,
          amount: shoppingCart[key],
        })
      }
    }
    Axios.Post("buy_dorayaki.php", request)
      .then(() => {
        for (let key in stocks) {
          stocks[key].reset()
        }
      })
      .then(() => alert("Pruchase success"))
      .then(() => location.reload())
  }
  total.textContent = shoppingCart["total"]

  polling(updateAllStock, 2000)
}

window.onunload = () => {
  clearTimeout(timeout)
}
