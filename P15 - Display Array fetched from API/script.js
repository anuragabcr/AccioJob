function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 1000);
  });
}

function PromiseAPI1() {
  return fetchData('https://dummyjson.com/posts');
}

function PromiseAPI2() {
  return fetchData('https://dummyjson.com/products');
}

function PromiseAPI3() {
  return fetchData('https://dummyjson.com/todos');
}

document.getElementById('fetchDataBtn').addEventListener('click', () => {
  PromiseAPI1()
    .then(data => {
      displayPosts(data.posts);
      console.log(data);
      return PromiseAPI2();
    })
    .then(data => {
      console.log(data);
      displayProduts(data.products);
      return PromiseAPI3();
    })
    .then(data => {
      console.log(data);
      displayTodos(data.todos);
    })
    .catch(error => console.error(error));
});

function displayPosts(data) {
  const tableBody = document.querySelector('#postsDisplay tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.body || ''}</td>
      <td>Likes: ${item.reactions.likes || ''}, Dislikes: ${item.reactions.dislikes || ''}</td>
      <td>${item.userId || ''}</td>
      <td>${item.views || ''}</td>
    `;
    tableBody.appendChild(row);
  });
}
function displayProduts(data) {
  const tableBody = document.querySelector('#productsDisplay tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.description || ''}</td>
      <td>Likes: ${item.price || ''}</td>
      <td>${item.rating || ''}</td>
      <td>${item.category || ''}</td>
    `;
    tableBody.appendChild(row);
  });
}
function displayTodos(data) {
  const tableBody = document.querySelector('#todosDisplay tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.todo}</td>
      <td>${item.completed || 'Pending'}</td>
      <td>Likes: ${item.userId || ''}</td>
    `;
    tableBody.appendChild(row);
  });
}