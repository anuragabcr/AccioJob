const login = document.getElementById("login");

login.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile) {
    alert("Email ID not found. <br /> Sign Up");
    return;
  }
  const user = profile.filter(
    (item) => item.email === email && item.password === password
  );

  if (user.length > 0) {
    localStorage.setItem(
      "user",
      JSON.stringify({ id: user[0].id, logined: true })
    );
    window.location.href = "/P20 - Shoping Cart/shop/index.html";
  } else {
    alert("Incorrect Email or Password");
  }
});
