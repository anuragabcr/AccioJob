let URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
let data

function sortMC() {
  data.sort((a, b) => b.market_cap - a.market_cap)
  createTable(data)
}

function sortPR() {
  data.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h)
  createTable(data)
}

let search = document.getElementById("search")
search.addEventListener("input", () => {
  let text = search.value.toLocaleLowerCase()
  console.log(text);
  temp = data.filter((item) => item.name.toLowerCase().includes(text) || item.symbol.toLowerCase().includes(text) )
  createTable(temp)
})

function getDataThroughThen() {
  fetch(URL)
    .then((response) => {
      response.json()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })
    })
    .catch((error) => {
      console.log(error);
    })
}

async function getDataThroughAsync() {
  let response = await fetch(URL)
  data = await response.json()
  createTable(data)
  console.log(data);
}

function createTable(data) {
  let tbody = document.getElementById("tbody")
  tbody.innerHTML = ''
  for (const item of data) {
    let tr = document.createElement('tr')
    tr.style.display = "block";
    tr.classList.add("row")
    let pnClass = item.market_cap_change_percentage_24h > 0 ? 'plus' : 'minus'
    tr.innerHTML = `
                    <td><img src=${item.image} />  ${item.name}</td>                
                    <td>${item.symbol.toUpperCase()}</td>                
                    <td>$${item.current_price}</td>                
                    <td>$${item.fully_diluted_valuation}</td>                
                    <td class=${pnClass}>${item.market_cap_change_percentage_24h}</td>                
                    <td>Mkt Cap: ${item.market_cap}</td>                
    `
    tbody.appendChild(tr)
  }
}

getDataThroughAsync()
getDataThroughThen()