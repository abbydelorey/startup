function login() {
    const name = document.querySelector("#form");
    localStorage.setItem("account", name.value);
    document.getElementById("logging").reset();
    window.location.reload();
  }
  

const accountName = document.querySelector('.form');
accountName.textContent = this.accessAccountName();

function accessAccountName() {
  return localStorage.getItem('personName')
}