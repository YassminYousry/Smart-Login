var userName = document.getElementById("userName");
userName.innerHTML = localStorage.getItem("userName");

function logOut(){
    localStorage.removeItem("userName");
    location.href = "index.html";
}