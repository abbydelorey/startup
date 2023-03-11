function rate() {
    const name = document.querySelector("#name");
    localStorage.setItem("name", name.value);
    const email = document.querySelector("#email");
    localStorage.setItem("email", email.value);
    const password = document.querySelector("#password");
    localStorage.setItem("password", password.value);
    const passwordTwo = document.querySelector("#passwordTwo");
    localStorage.setItem("verifyPassword", passwordTwo.value);

}
document.getElementById("signUp").reset();
window.location.reload();