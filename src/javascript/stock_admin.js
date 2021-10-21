import Axios from "./utils/AxiosBeLike.js"

const container = document.getElementById("left")
const updateBtn = document.getElementById("update")
const lala = document.getElementById("lala")
let timeout = null
const stocks = {}

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
          <span id="stock_counter">${stock.stock}</span>
          <span class="op" id="plus">+</span>   
      </div>
  </div>`

  container.innerHTML = Child(stock)
  let stockCounter = container.querySelector("#stock_counter")
  const updateStockCounter = (count) => {
    const cur = parseInt(stockCounter.textContent)
    stockCounter.textContent = cur + count
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

  container.getUpdatedStock = () => {
    const updated = parseInt(stockCounter.textContent)
    if (updated !== parseInt(stock.stock)) {
      return {
        id: stock["id_dorayaki"],
        action: updated > stock.stock ? "+" : "-",
        amount: Math.abs(updated - stock.stock),
      }
    }
    return null
  }
  container.update = (s) => {
    const temp = stockCounter.textContent
    container.innerHTML = Child(s)
    if (s["id_dorayaki"] === stock["id_dorayaki"]) {
      stockCounter = container.querySelector("#stock_counter")
      prepare()
      stockCounter.textContent = temp
      stock = s
    }
  }
  return container
}

const getAllStock = () =>
  Axios.Get("all_stock.php").then((allStock) => JSON.parse(allStock))

const polling = (fn, interval) => {
  const createTimeout = () => {
    timeout = setTimeout(() => {
      fn().then(() => createTimeout())
    }, interval)
  }
  createTimeout()
}

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
  getAllStock().then((allStock) =>
    allStock.forEach((stock) => {
      const stockCard = StockCard({ stock })
      stocks[stock["id_dorayaki"]] = stockCard
      container.appendChild(stockCard)
    })
  )

  updateBtn.onclick = () => {
    const s = []
    for (let key in stocks) {
      const stock = stocks[key]
      const t = stock.getUpdatedStock()
      if (t !== null) {
        s.push(t)
      }
    }
    Axios.Post("update_stock.php", s).then(() => alert("Update success"))
  }
  polling(updateAllStock, 2000)
}

window.onunload = () => {
  clearTimeout(timeout)
}
