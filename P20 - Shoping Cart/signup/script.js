const signup = document.getElementById("signup");

signup.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;

  console.log(
    password,
    cpassword,
    password == cpassword,
    password === cpassword
  );

  let isValid = true;
  if (fname.trim() === "") {
    alert("First name cannot be empty.");
    isValid = false;
  }

  if (lname.trim() === "") {
    alert("Last name cannot be empty.");
    isValid = false;
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email.trim())) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  const minPasswordLength = 8;
  if (password.length < minPasswordLength) {
    alert(`Password must be at least ${minPasswordLength} characters long.`);
    isValid = false;
  }

  if (password != cpassword) {
    alert("Password do not match");
    isValid = false;
  }

  if (isValid) {
    console.log("Form submission successful!");
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
      profile.push({ id: profile.length, fname, lname, email, password });
      localStorage.setItem("profile", JSON.stringify(profile));
      localStorage.setItem(
        "user",
        JSON.stringify({ id: profile.length, logined: true })
      );
    } else {
      localStorage.setItem(
        "profile",
        JSON.stringify([{ id: 0, fname, lname, email, password }])
      );
      localStorage.setItem("user", JSON.stringify({ id: 0, logined: true }));
    }
    window.location.href = "/P20 - Shoping Cart/shop/index.html";
  }
});
