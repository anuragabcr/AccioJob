let isEmailValid = false
let isPasswordValid = false
let email = document.getElementById("email")
let password = document.getElementById("password")
let success = document.getElementById("success")

function onEmailChange() {
  let eError = document.getElementById("eError")
  if (email.value.length < 3) {
    eError.innerHTML = "Email Cann't be less the 3 character long";
    isEmailValid = false
  } else if(!email.value.includes('@') || !email.value.includes('.')) {
    eError.innerHTML = "Email must have '@' and '.'";
    isEmailValid = false
  } else {
    eError.innerHTML = "";
    isEmailValid = true
  }
  successMsg()
}

function onPasswordChange() {
  let ePassword = document.getElementById("ePassword")
  if (password.value.length < 8) {
    ePassword.innerHTML = "Password Cann't be less the 8 character long";
    isPasswordValid = false
  } else {
    ePassword.innerHTML = "";
    isPasswordValid = true
  }
  successMsg()
}

function successMsg() {
  if (isEmailValid && isPasswordValid) {
    success.innerHTML = "All goog to go!"
  } else {
    success.innerHTML = ""
  }
}

function onSubmit() {
  if (isEmailValid && isPasswordValid) {
    if (window.confirm("are you sure you want to submit?")) {
      alert("Successful signup!")
    }else {
      email.value = ''
      password.value = ''
      success.innerHTML = ""
    }
  }
}