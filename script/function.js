const nameUser = document.getElementById("name");
const usernameUser = document.getElementById("username");
const passwordUser = document.getElementById("password");

let nameValue = nameUser.value;
let usernameValue = usernameUser.value;
let passwordValue = passwordUser.value;

const btnClick = document.getElementById("btn-click");

btnClick.addEventListener("click", function() {
    console.log("Name:", nameUser.value);
    console.log("Username:", usernameUser.value);
    console.log("Password:", passwordUser.value);
});


