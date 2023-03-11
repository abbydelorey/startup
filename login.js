function login() {
    const nameEl = document.querySelector("#form");
    localStorage.setItem("account", nameEl.value);
    document.getElementById("logging").reset();
    window.location.reload()
  }
  

const accountName = document.querySelector('.user-name');
accountName.textContent = this.accessAccountName();

function accessAccountName() {
  return localStorage.getItem('userName')
}