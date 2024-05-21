let item = document.getElementById("item");
let date = document.getElementById("date");
let priority = document.getElementById("priority");

let cDate = new Date();
let formatedDate = cDate.toISOString().split("T")[0];

date.setAttribute("min", formatedDate);

let todos = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

function onSubmit() {
  todos.push({
    name: item.value,
    date: date.value,
    priority: priority.value,
    completed: false,
  });
  localStorage.setItem("todo", JSON.stringify(todos));
  renderTodos();
}

function renderTodos() {
  let todays = document.getElementById("todays");
  let future = document.getElementById("future");
  let complete = document.getElementById("complete");

  todays.innerHTML = "";
  future.innerHTML = "";
  complete.innerHTML = "";

  let todaysData = todos.filter(
    (item) => !item.completed && item.date == formatedDate
  );
  let futureData = todos.filter(
    (item) => !item.completed && item.date > formatedDate
  );
  let completeData = todos.filter((item) => item.completed);

  if (todaysData.length === 0) {
    todays.innerHTML =
      '<p class="empty">You have completed all your task for Today</p>';
  }
  if (futureData.length === 0) {
    future.innerHTML = '<p class="empty">You are ahead of your tasks</p>';
  }
  if (completeData.length === 0) {
    complete.innerHTML =
      '<p class="empty">You hav not completed any task yet.</p>';
  }

  for (let i = 0; i < todaysData.length; i++) {
    todays.appendChild(renderItem(todaysData[i], i));
  }
  for (let i = 0; i < futureData.length; i++) {
    future.appendChild(renderItem(futureData[i], i));
  }
  for (let i = 0; i < completeData.length; i++) {
    complete.appendChild(renderItem(completeData[i], i));
  }
}

function renderItem(itemData, index) {
  let p = document.createElement("p");
  let temp = btoa(JSON.stringify(itemData))
  p.innerHTML = `
    <span>${index + 1} ${itemData.name}</span>
    <span>${itemData.date}</span>
    <span>${itemData.priority}</span>
    <span>
        <img onclick="onComplete('${temp}')" src="https://e7.pngegg.com/pngimages/289/511/png-clipart-computer-icons-check-mark-checkbox-mse-personal-service-ag-quality-quality-label-miscellaneous-angle.png" />
        <img onclick="onDelete('${temp}')" src="https://cdn-icons-png.freepik.com/512/5028/5028066.png" />
    </span>
  `;
  return p;
}

function onComplete(item) {
  item = atob(item)
  todos.forEach((todo) => {
    if (JSON.stringify(todo) === item) {
      todo["completed"] = true;
    }
  });
  localStorage.setItem("todo", JSON.stringify(todos));
  renderTodos();
}

function onDelete(item) {
  item = atob(item)
  const index = todos.findIndex((todo) => JSON.stringify(todo) === item);
    if (index !== -1) {
        todos.splice(index, 1);
    }
  localStorage.setItem("todo", JSON.stringify(todos));
  renderTodos();
}

renderTodos();
