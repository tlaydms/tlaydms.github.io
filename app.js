const LoginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username)
    greeting.innerText = `❥･•˚Lucky ${username} Syndrome♥｡‧˚`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


LoginForm.addEventListener("submit", onLoginSubmit);