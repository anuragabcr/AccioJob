const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  window.location.href = "/P20 - Shoping Cart/shop/index.html";
}
