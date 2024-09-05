/*
  Register:
  - Llenar los campos del formulario
  - Validar los campos del formulario
  Validaciones a realizar:
  - Longitud del nombre y apellido entre 3 caracteres y 25
  - Que el campo no este vacio ✅ => tenemos funcion
  - Que el email sea valido (REGEX)
  - Que la contraseña tenga X caracteres y tenga un simbolo y un numero

  Que pasa si las validaciones no se cumplen?
  - Mostramos un mensaje de error abajo del campo
  Como la hacemos?
  - condiciones
  - funcion para mostrar error y otra para mostrar exito
*/

// Traemos los elementos necesarios del DOM
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

/* ----------------------------------------------------- */
/* ----------------------  constantes ------------------ */
/* ----------------------------------------------------- */
const MIN_CHARACTERS = 5;
const MAX_CHARACTERS = 15;

/* ----------------------------------------------------- */
/* -------------- Funciones auxiliares ----------------- */
/* ----------------------------------------------------- */

// Funcion para evaluar si el campo esta vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Funcion para validar si el campo esta entre 3 y 25 caracteres
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

// Funcion para validar el email CON REGEX
const isEmailValid = (input) => {
  // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  const regex = /^\w+([\.-]?\w+)*@(gmail|hotmail|yahoo)\.com$/;

  // test
  return regex.test(input.value.trim()); // true o false
};

// Funcion para verificar que el mail no se este usando
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

// Funcion para validar la contraseña segura
const isPassSecure = (input) => {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  return regex.test(input.value.trim());
};

/* ----------------------------------------------------- */
/* -------------- Funciones Error/Exito ---------------- */
/* ----------------------------------------------------- */
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

/* ----------------------------------------------------- */
/* -------------- Funciones de validacion -------------- */
/* ----------------------------------------------------- */
const checkTextInput = (input) => {
  let valid = false;

  // validaciones aca
  if (isEmpty(input)) {
    // console.log('esta vacio')
    showError(input, "Este campo es obligatorio");
    return;
  }

  if (!isBetween(input, MIN_CHARACTERS, MAX_CHARACTERS)) {
    console.log();
    showError(
      input,
      `El campo tiene que tener entre ${MIN_CHARACTERS} y ${MAX_CHARACTERS} caracteres`
    );
    return;
  }

  // console.log("input validado");
  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar email
const checkEmail = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  if (!isEmailValid(input)) {
    showError(input, "El email no es válido");
    return;
  }

  if (isExistingEmail(input)) {
    showError(input, "El email ya se encuentra registrado");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar la pw
const checkPassword = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  if (!isPassSecure(input)) {
    showError(
      input,
      "La contraseña debe tener entre 8 y 16 caracteres, una mayuscula, una minuscula y un simbolo"
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Validacion
const validateForm = (e) => {
  e.preventDefault();

  // Validar cada campo con su funcion validadora
  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isPasswordValid = checkPassword(passInput);

  // Validar el formulario
  let isValidForm =
    isNameValid && isLastNameValid && isEmailValid && isPasswordValid;

  if (isValidForm) {
    console.log("Te registrate con exito");
    users.push({
      name: nameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passInput.value,
      phone: phoneInput.value,
    });
    saveToLocalStorage();
    alert("Te registraste con éxito");
    window.location.href = "login.html";
  }
};

// Init
const init = () => {
  registerForm.addEventListener("submit", validateForm);
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  passInput.addEventListener("input", () => checkPassword(passInput));
};

init();
