// Traer el elemento
// const h3 = document.querySelector('#h3')
const h3 = document.getElementById("h3");
// console.log(h3)

// ELEMENTO.addEventListener('EVENTO', () => {})
// ELEMENTO.addEventListener('EVENTO', funcion)

// h3.addEventListener('click', (event) => {
//   console.log(event.target)
//   console.log('click desde js')
// })

// const consolear = () => console.log('holi')

// h3.addEventListener("click", consolear);

// function consolear() {
//   console.log("holi");
// }

// Focus/ blur
const inputBlur = document.getElementById("inputBlur");
// console.log(inputBlur)

inputBlur.addEventListener("focus", () => {
  console.log("tas focuseado");
  inputBlur.style.backgroundColor = "blue";
  // background-color
});

inputBlur.addEventListener("blur", () => {
  console.log("estas deseleccionado");
  inputBlur.style.backgroundColor = "";
});

// Change
const inputChange = document.querySelector("#inputChange");
// console.log(inputChange)

inputChange.addEventListener("change", (e) => {
  const value = e.target.value.trim();

  console.log(value);
});

// Event default
const form = document.querySelector(".form");
const input = document.querySelector(".inputForm");

const handleSubmit = (e) => {
  e.preventDefault();

  if (input.value === "") {
    console.log("Llena el input");
  } else {
    console.log(`El valor del input es ${input.value}`);
    input.value = "";
  }
};

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   // console.log('form enviado')
//   // alert('form enviado')
// })

// form.addEventListener("submit", handleSubmit);

// stop propagation
const container = document.querySelector(".container");
const padre = document.querySelector(".padre");
const hijo = document.querySelector(".hijo");

container.addEventListener("click", () => {
  console.log("CONTAINER");
});

padre.addEventListener("click", (e) => {
  console.log("PADRE");
  e.stopPropagation();
});

hijo.addEventListener("click", (e) => {
  console.log("HIJO");
  e.stopPropagation();
});

// Estilos
const caja = document.getElementById("caja");
const divBTN = document.querySelector(".divBtn");
// console.log(divBTN)

divBTN.addEventListener("click", () => {
  caja.classList.add("cambio");
  // caja.style.backgroundColor = "blue";
  // caja.style.border = "1px solid red";
  // caja.style.padding = "20px 15px";
});

// messi
const imagen = document.querySelector(".messi");
// const show = document.querySelector("#show");
// const hide = document.querySelector("#hide");
// const toggle = document.querySelector('#toggle')

// hide.addEventListener('click', () => {
//   imagen.style.opacity = '0'
// })

// show.addEventListener('click', () => {
//   imagen.style.opacity = '1'
// })

// toggle.addEventListener('click', () => {
//   imagen.classList.toggle('hide')
//   // console.log(imagen.classList.contains('hide')) // true / false

//   if(imagen.classList.contains('hide')){
//     toggle.innerText = 'Mostrar'
//   }

//   if(!imagen.classList.contains('hide')){
//     toggle.innerText = 'Ocultar'
//   }
// })

// const imgs = []

const btnSrc = document.querySelector("#cambiarSrc")

btnSrc.addEventListener('click', () => {
  // imagen.setAttribute('src', 'https://www.fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000')
  imagen.src = 'https://www.fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000'

  setTimeout(() => {
    imagen.src = 'https://resizer.glanacion.com/resizer/v2/lionel-messi-posa-con-el-balon-de-oro-2021-en-la-IRHNC7DNF5BU7EOWTAGNODWKKE.JPG?auth=64abdd21b9f4a1c22193d56d8c493038c9f076fb270eef2edd66eb2331788104&width=768&quality=70&smart=false'
  }, 3000)
})
