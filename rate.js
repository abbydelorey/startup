function rate() {
    const drink = document.querySelector("#drink");
    localStorage.setItem("drink", drink.value);
    const service = document.querySelector("#service");
    localStorage.setItem("service", service.value);
    const clean = document.querySelector("#clean");
    localStorage.setItem("clean", clean.value);
    const accurate = document.querySelector("#accurate");
    localStorage.setItem("accurate", accurate.value);
    const wait = document.querySelector("#wait");
    localStorage.setItem("wait", wait.value);
}
document.getElementById("rate").reset();
window.location.reload();