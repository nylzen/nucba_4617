// Crearndo un div
const card = document.createElement("div");
card.classList.add("card");

// Crear la img
const cardImg = document.createElement("img");
cardImg.src = "https://via.placeholder.com/150";
cardImg.classList.add("card-img");

// creamos el titulo
const cardTitle = document.createElement("h2");
cardTitle.textContent = "Titulo de la tarjeta";
cardTitle.classList.add("card-title");

// creamos un body
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

const cardBodyText = document.createElement("p");
cardBodyText.innerText = "Contenido de la card";

cardBody.appendChild(cardBodyText);

// crear un boton
const cardButton = document.createElement("button");
cardButton.innerText = "Accion";
cardButton.setAttribute("id", "messi");

// Anexamos los elementos
card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardButton);

// crear un container
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
cardContainer.appendChild(card);

// Ultimo paso
// ESTO LO AGREGA AL FINAL
// const main = document.querySelector("main");
// main.appendChild(cardContainer);

const cajaCard = document.querySelector(".caja-card");
cajaCard.appendChild(cardContainer);

// Segunda forma
const caja = document.querySelector(".caja");

// caja.innerHTML = '<h1>Titulo de la tarjeta</h1><p>Algo</p><img src="https://via.placeholder.com/150"/>'

const dato = "Messi";

const objetoParaCard = {
  name: "Messi",
  src: "https://w0.peakpx.com/wallpaper/1000/679/HD-wallpaper-lionel-messi-messi-campeon-messi-copa-america-thumbnail.jpg",
  premios: ["Mundial", "Copa America x2", "Finalissima", "Medalla de oro"],
};

caja.innerHTML = `<div class="card">
    <img src="${objetoParaCard.src}" class="card-img">
    <h2 class="card-title">${objetoParaCard.name}</h2>
    <div class="card-body">
    // <img class="imagen" src="${objetoParaCard.premios[1]}"/>
    <ul>
      ${objetoParaCard.premios.map((premio) => `<li>${premio}</li>`).join("")}
    </ul>
    </div>
    <button id="algo">Accion</button>
</div>`;

// const button = document.getElementById('algo')
// console.log(button)
// button.addEventListener('click', () => alert('messi'))

// const messiBtn = document.getElementById('messi')
// console.log(messiBtn)
// messiBtn.addEventListener('click', () => alert('tuki'))

// Funcion generadora

const cardsContainer = document.querySelector(".cardContainer2");

const cardInfo = {
  title: "holi",
  desc: "tuki",
  img: "https://via.placeholder.com/150",
};

const cardInfo2 = {
  title: "chau",
  desc: "tuki",
  img: "https://via.placeholder.com/150",
};

const createCardtemplate = (data) => {
  const { img, title } = data;
  return `<div class="card">
    <img src=${img}/>
    <h2>${title}</h2>
  </div>`;
};

// cardsContainer.innerHTML = createCardtemplate(cardInfo)
cardsContainer.innerHTML = createCardtemplate(cardInfo2);
// cardsContainer.innerHTML = `
// <div class="card">
//   <img src=${cardInfo.img}/>
// </div>
// `

const animalesObj = [
  {
    name: "Perro",
    desc: "Ladra",
  },
  {
    name: "Gato",
    desc: "Maulla",
  },
  {
    name: "Pez",
    desc: "Nada",
  },
];

const createCard = (elemento) => {
  return `<div class="card">
    <h2>${elemento.name}</h2>
    <h2>${elemento.desc}</h2>
  </div>`;
};

// cardsContainer.innerHTML = animalesObj.map((animal) => createCard(animal)).join('')

cardsContainer.innerHTML = animalesObj.map(createCard).join("");

// cardsContainer.innerHTML = animalesObj
//   .map((animal) => {
//     return `
//   <div class="card">
//     <h2>${animal.name}</h2>
//     <h2>${animal.desc}</h2>
//   </div>
//   `;
//   })
//   .join("");

const jsonData = JSON.parse(`
  {
  "name":"Messi",
  "edad": 19,
  "otraCosa": true
}`);

// console.log(jsonData)
// console.log(jsonData.name)

// Localstorage
// const users = [
//   {
//     id: 1,
//     nombre: 'Gustavo'
//   },
//   {
//     id: 2,
//     nombre: 'Jose'
//   }
// ]

// localStorage.setItem('algo', 'valor')
// localStorage.setItem('usuarios', users)
// localStorage.setItem('users', JSON.stringify(users))

// obtener datos
const usuarios = JSON.parse(localStorage.getItem("users"));

// console.log(usuarios.map(algo => algo.nombre));
