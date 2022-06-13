const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
    location.href = "/Login.html";
  }

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if (username === "user" && password === "password") {
        window.location.assign("./home.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})