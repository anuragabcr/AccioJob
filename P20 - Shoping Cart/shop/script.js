const apiData = document.getElementById("apiData");
const search = document.getElementById("search");
const filters = document.querySelectorAll(".filter");
const user = JSON.parse(localStorage.getItem("user"));

search.addEventListener("input", () => {
  const filter = search.value;
  console.log(filter);
});

if (!user) {
  window.location.href = "/P20 - Shoping Cart/index.html";
}

async function fetchMale() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  return await res.json();
}

async function fetchFemale() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  return await res.json();
}

async function fetchJew() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  return await res.json();
}

async function fetchEle() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  return await res.json();
}

async function filteredDisplay(index) {
  apiData.innerHTML = `
    <div class="flex justify-center mt-10 text-3xl">Loading...</div>
  `;
  const maleData = await fetchMale();
  const femaleData = await fetchFemale();
  const jewData = await fetchJew();
  const eleData = await fetchEle();
  const mItems = showData(maleData.splice(0, 5));
  const mSec = showSection(mItems, "Men's Clothing");
  const fItems = showData(femaleData.splice(0, 5));
  const fSec = showSection(fItems, "Women's Clothing");
  const jItems = showData(jewData.splice(0, 5));
  const jSec = showSection(jItems, "Jewelery");
  const eItems = showData(eleData.splice(0, 5));
  const eSec = showSection(eItems, "Electronics");

  filters.forEach((filter) => filter.classList.remove("active"));
  filters[index].classList.add("active");

  switch (index) {
    case 0:
      apiData.innerHTML = mSec + fSec + jSec + eSec;
      break;
    case 1:
      apiData.innerHTML = mSec;
      break;
    case 2:
      apiData.innerHTML = fSec;
      break;
    case 3:
      apiData.innerHTML = jSec;
      break;
    case 4:
      apiData.innerHTML = eSec;
      break;

    default:
      apiData.innerHTML = mSec + fSec + jSec + eSec;
      break;
  }
}

function menFilter() {}

function showData(data) {
  let items = "";

  data.map((item) => {
    items += `
      <div class="w-60 border-2 border-solid border-black m-2">
              <img
                src=${item.image}
                alt="shirt"
                class="w-full h-60"
              />
              <div class="p-2">
                <div>Title: ${item.title.slice(0, 15)}</div>
                <div>Price: $${item.price}</div>
                <div>Rating: ${item.rating.rate}</div>
              </div>
              <div class="flex justify-center  bg-black w-full text-white py-2">
                Add to Cart
              </div>
            </div>
    `;
  });
  return items;
}

function showSection(data, title) {
  let section = "";
  section += `
    <section>
          <title>${title}</title>
          <div class="flex flex-wrap justify-center">
            ${data}
          </div>
        </section>
  `;
  return section;
}

window.onload = filteredDisplay(0);
