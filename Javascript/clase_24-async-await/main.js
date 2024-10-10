// fetch
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/62'))

// fetch("https://pokeapi.co/api/v2/pokemon/62")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const baseExp = data.base_experience;

//     console.log(baseExp);
//   })
//   .catch((error) => console.error(error));

// Async / await sin manejar errores

// const getPokemon = async () => {
//   const res =  await fetch("https://pokeapi.co/api/v2/pokemon/18")

//   console.log(res)
//   const data = await res.json()
//   console.log(data)
//   return data
// };

// getPokemon();

// Try/catch
const getPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (res.ok === false) return;

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// getPokemon();
const asdf = [
  {
    slot: 1,
    type: {
      name: "water",
      url: "https://pokeapi.co/api/v2/type/11/",
    },
  },
  {
    slot: 2,
    type: {
      name: "fighting",
      url: "https://pokeapi.co/api/v2/type/2/",
    },
  },
  {
    slot: 3,
    type: {
      name: "messi",
      url: "https://pokeapi.co/api/v2/type/2/",
    },
  },
];

const container = document.querySelector(".container");
const form = document.querySelector("#form");
const input = document.querySelector(".input");
const numeros = [1, 2, 3, 4, 5];

const templatePokemon = (pokemon) => {
  const { name, sprites, types } = pokemon;
  container.innerHTML = `
  <div>
    <img src="${sprites.front_default}">
    <h2>${name}</h2>
    <p>array: ${numeros.join("")}</p>
    <p>${types
      .map(
        (item) => `<span class="${item.type.name}">${item.type.name}</span> `
      )
      .join(" | ")}</p>
  </div>
  `;
};

// const renderPokemon = async () => {
//   console.log(inputValue)
//   const pokemon = await getPokemon(inputValue);
//   templatePokemon(pokemon);
// };

const poke = async (e) => {
  e.preventDefault();

  const inputValue = input.value;
  if(inputValue === '') {
    alert('no podes mandar vacio')
  }

  const pokemon = await getPokemon(inputValue);
  templatePokemon(pokemon)
};

// renderPokemon();

form.addEventListener("submit", poke);
// input.addEventListener('input', () => {
//   const inputValue = input.value;
//   const regex = /^[0-9]*$/;

  // TODO: Hacer un addEventListener para el input de tipo input y pasarle lo de abajo
  // console.log(!regex.test(inputValue))
  // if(!regex.test(inputValue)){
  //   input.value = input.value.replace(/^[0-9]/g, '')
  // }
// })

// const dobles = numeros.map(num => num * 2)
