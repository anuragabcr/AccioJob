function getMenu() {
  fetch('menu.json')
      .then(response => response.json())
      .then(data => {
          displayMenu(data);
      })
      .catch(error => console.error('Error fetching menu:', error));
}

function displayMenu(menuItems) {
  let card_group = document.getElementById("card-group")
  let card = ''

  for (let i = 0; i < 3; i++) {
    card += `
    <div class="card m-2">
    <img src="${menuItems[i].imgSrc}" class="card-img-top"
      alt="${menuItems[i].name}" />
    <div class="card-body">
      <div>
        <h5 class="card-title">${menuItems[i].name}</h5>
        <p class="card-text">
        ${menuItems[i].price}
        </p>
      </div>
      <div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="#363A43"/>
          <path d="M20 10.6666V29.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.6666 20H29.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>                      
      </div>
    </div>
  </div>
    `
  }
  card_group.innerHTML = card
}

function takeOrder() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const burgers = ['Cheese Burger', 'Chicken Burger', 'Veggie Burger'];
          const order = {
              items: burgers[Math.floor(Math.random() * 3)],
              quantity: 1
          };
          resolve(order);
      }, 2500);
  });
}

function orderPrep() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({ order_status: true, paid: false });
      }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({ order_status: true, paid: true });
      }, 1000);
  });
}

function thankyouFnc() {
  alert('Thank you for eating with us today!');
  window.location.href = "menu.html";
}

async function restaurantProcess() {
  getMenu();

  const order = await takeOrder();
  console.log('Order:', order);
  alert(`Order: ${JSON.stringify(order)}`);

  const prepStatus = await orderPrep();
  console.log('Preparation Status:', prepStatus);
  alert(`Preparation Status: ${JSON.stringify(prepStatus)}`);

  const paymentStatus = await payOrder();
  console.log('Payment Status:', paymentStatus);
  alert(`Payment Status: ${JSON.stringify(paymentStatus)}`);

  if (paymentStatus.paid) {
      thankyouFnc();
  }
}

window.onload = restaurantProcess;




