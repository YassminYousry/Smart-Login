// array list
var usersList;
//============================login inputs============================
var loginUserEmail = document.getElementById("login-user-email");
var loginUserPassword = document.getElementById("login-user-password");
var loginButton = document.getElementById("login-btn");
//============================Signup inputs============================
// Signup inputs
var signUpUserName = document.getElementById("signUp-user-name");
var signUpUserEmail = document.getElementById("signUp-user-email");
var signUpUserPassword = document.getElementById("signUp-user-password");
var signUpButton = document.getElementById("signUp-btn");
var messageSpan = document.getElementById("message");
// ====================== Getting Data from Local Storage ======================
if (localStorage.getItem("users") != null) {
  usersList = JSON.parse(localStorage.getItem("users"));
} else {
  usersList = [];
}
// ====================== messages ========================
function message(msg) {
  messageSpan.classList.replace("opacity-0", "opacity-1");
  messageSpan.innerHTML = `${msg}`;
}
// ====================== Check Email ========================
function checkEmail() {
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].email === signUpUserEmail.value) {
        return true;
      }
    }
  }
// ====================== Check User ============================
function checkUser() {
  for (let i = 0; i < usersList.length; i++) {
    if (loginUserEmail.value === usersList[i].email && loginUserPassword.value === usersList[i].password) {
      var userName = usersList[i].name;
      localStorage.setItem("userName", JSON.stringify(userName));
      return true;
    }
  }
}
// ====================== Sign Up ======================
var user = {};
function create() {
  user = {
    name: signUpUserName.value,
    email: signUpUserEmail.value,
    password: signUpUserPassword.value,
  };
  checkEmail();
  if (checkEmail() == true) {
    var emailMessage =
      "This E-mail is already exist ..";
      message(emailMessage);
    } else {
      usersList.push(user);
      localStorage.setItem("users", JSON.stringify(usersList));
      var success = "Success";
      message(success);
      reset();
    }
  }
  
// ====================== Reset ======================
function reset() {
  signUpUserName.value = "";
  signUpUserEmail.value = "";
  signUpUserPassword.value = "";
}

// ====================== Login ========================
function login(){
    checkUser();
    if (checkUser() === true) {
      location.href ="welcome.html";
    } else {
      var errorUser = "Email or Password is incorrect ...";
      message(errorUser);
    }
  }
