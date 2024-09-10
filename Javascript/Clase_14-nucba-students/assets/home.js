const userName = document.getElementById("user-name");
const logoutBtn = document.getElementById("logout-message");

const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
console.log(activeUser);



const showUserName = () => {
  userName.textContent = `${activeUser.name} ${activeUser.lastName}`;
};

const logout = () => {
  if (window.confirm("Estás seguro que queres cerrar sesión?")) {
    sessionStorage.removeItem("activeUser");
    window.location.href = "../index.html";
  }
};

const init = () => {
  showUserName();
  logoutBtn.addEventListener("click", logout);
};

init();