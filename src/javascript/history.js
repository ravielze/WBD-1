import Axios from "./utils/AxiosBeLike.js"

const table = document.getElementById("table")
const mainContainer = document.getElementById("main-container")

const GetAllHistory = (page) =>
  Axios.Get("history/index.php", { page }).then((res) => JSON.parse(res))

const TableRow = (props) => {
  const { username, dorayaki, amount, flag } = props
  const tr = document.createElement("tr")
  const Child = `
    <td>${username}</td>
    <td>${dorayaki}</td>
    <td>${flag}</td>
    <td>${amount}</td>
  `

  tr.innerHTML = Child

  return tr
}

const Pagination = (props) => {
  const { total, current } = props
  const pagination = document.createElement("div")
  pagination.classList.add("pagination")
  pagination.id = "pagination"
  for (let i = 0; i < total; i++) {
    const span = document.createElement("span")
    span.textContent = i + 1
    if (i + 1 === current) {
      span.classList.add("selected")
    }
    span.onclick = () => Update(i + 1)
    pagination.appendChild(span)
  }
  return pagination
}

const Update = (page) => {
  GetAllHistory(page).then((allHistory) => {
    while (table.rows.length > 1) {
      table.deleteRow(1)
    }
    allHistory.data.forEach((history) => table.appendChild(TableRow(history)))
    const pag = document.getElementById("pagination")
    if (pag !== null) {
      pag.remove()
    }
    mainContainer.appendChild(
      Pagination({ total: allHistory["total_page"], current: page })
    )
  })
}
Update(1)
