/*
Login, tenemos que escribir un email y contraseña que exista dentro de la base de datos.

Para ello, vamos a crear una función que valide si el email y la contraseña son correctos.
*/

const loginForm = document.getElementById("login--form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const errorMessage = document.getElementById("form__error");

const users = JSON.parse(localStorage.getItem("users")) || [];

/* ----------------------------------------------------- */
/* -------------- Funciones de validacion -------------- */
/* ----------------------------------------------------- */

// Funcion para evaluar si el campo esta vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

//  Funcion para buscar el usuario
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

// Funcion para matchear contraseñas
const isMatchingPass = (input) => {
  const user = users.find((user) => user.email === emailInput.value.trim());

  return user.password === input.value.trim();
};

/* ----------------------------------------------------- */
/* -------------------- Funciones Error ---------------- */
/* ----------------------------------------------------- */
const showError = (message) => {
  errorMessage.textContent = message;
};

const isValidAccount = () => {
  let valid = false;

  // User
  if (isEmpty(emailInput)) {
    showError("Por favor llena los campos");
    return;
  }

  if (!isExistingEmail(emailInput)) {
    showError("El email no existe");
    return;
  }

  // Pass
  if (isEmpty(passInput)) {
    showError("Por favor llena los campos");
    return;
  }

  if (!isMatchingPass(passInput)) {
    showError("Los datos ingresados no son correctos");
    return;
  }

  alert("Estás en linea");
  valid = true;
  errorMessage.textContent = "";
  return valid;
};

const login = (e) => {
  e.preventDefault();

  if (isValidAccount()) {
    const user = users.find((user) => user.email === emailInput.value.trim());

    sessionStorage.setItem("activeUser", JSON.stringify(user));

    window.location.href = '../pages/home.html'

  }
};

const init = () => {
  loginForm.addEventListener("submit", login);
};

init();
