const saveInfo = document.getElementById("saveInfo");
const changePass = document.getElementById("changePass");
const logout = document.getElementById("logout");
const user = JSON.parse(localStorage.getItem("user"));
const profile = JSON.parse(localStorage.getItem("profile"));

if (!user) {
  window.location.href = "/P20 - Shoping Cart/index.html";
}

saveInfo.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  profile.map((item) => {
    if (item.id == user.id) {
      item.fname = fname;
      item.lname = lname;
    }
  });
  localStorage.setItem("profile", JSON.stringify(profile));
  alert("Info saved");
});

changePass.addEventListener("click", () => {
  const oldPAss = document.getElementById("oldPAss").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;

  if (profile[user.id].password == oldPAss) {
    if (pass == cpass) {
      profile[user.id].password = pass;
      localStorage.setItem("profile", JSON.stringify(profile));
      alert("Password changed successfully");
    } else {
      alert("Password and Confirm password don't match");
    }
  } else {
    alert("Old password don't match");
  }
});

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "/P20 - Shoping Cart/index.html";
});
