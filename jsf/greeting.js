const loginform = document.querySelector(".login-form");
const gretting = document.querySelector("#greeting");
const logininput = document.querySelector(".login-form input");
const HIDDEN_TEXT = "hidden"
function loginFunction(event) {
    event.preventDefault();
    loginform.classList.add(HIDDEN_TEXT);
    const username = logininput.value;
    GreetingFunction(username)
    localStorage.setItem("username", username);
}

function GreetingFunction(username) {
    gretting.classList.remove(HIDDEN_TEXT)
    gretting.innerText = "hello " + username
}

const USER_VALUE = localStorage.getItem("username")
if (USER_VALUE === null) {
    loginform.classList.remove(HIDDEN_TEXT)
    loginform.addEventListener("submit", loginFunction)
} else {
    GreetingFunction(USER_VALUE)
}
