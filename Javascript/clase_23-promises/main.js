// setTimeOut
// const saludar = () => console.log('Hola')

// setTimeout(saludar, 1000)

// saludar()

// setInterval

// const contador = () => console.log('Contando')

// setInterval(contador, 1000)

// let intervalId = setInterval(contador, 1000)

// console.log(intervalId)

// setTimeout(() => clearInterval(intervalId) , 5000)

// Relojito

const reloj = () => {
  const p = document.getElementById("reloj");
  const fecha = new Date();
  p.textContent = fecha.toLocaleTimeString();
};

// reloj()

// console.log(new Date().toLocaleTimeString())

// reloj()
// let relojInterval = setInterval(reloj, 1000)

// setTimeout(() => clearInterval(relojInterval), 5000)

// const test = async (a,b) => {
//   return a + b
// }

// Promesas

// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre
//     this.edad = edad
//   }
// }

// const persona = new Persona('Juan', 20)

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('holis')
//     reject("falle");
//   }, 2000);
// });

// console.log(promesa) // promesa pendiente FALTA MANEJAR RESOLVE / REJECT

// Una promesa SI O SI tenemos que decirle que va a hacer cuando se resuelva ( o sea, tenga exito) y que va a hacer si esa promesa llegase a fallar

// promesa
//   .then((respuesta) => console.log(respuesta)) // promesa resuelta
//   .catch((error) => console.error(error)); // promesa rechazada

// const promesaAleatoria = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const numeroAleatorio = Math.floor(Math.random() * 50);

//     if (numeroAleatorio > 25) {
//       resolve(`El numero : ${numeroAleatorio} está bien`);
//       return;
//     }

//     reject(`El numero : ${numeroAleatorio} está mal`);
//   }, 1000);
// });

// promesaAleatoria
//   .then(respuesta => console.log(respuesta))
//   .catch(error => console.error(error));
// const numeroAleatorio = Math.floor(Math.random() * 50)
// console.log(numeroAleatorio)

// fetch('https://messi.com.ar/pepito')
//   .then(res => console.log(res))
//   .catch(error => console.error(error))

// const peliculas = [
//   {
//     id: 1,
//     titulo: "Taxi Driver",
//   },
//   {
//     id: 2,
//     titulo: "Pulp Fiction",
//   },
//   {
//     id: 3,
//     titulo: "El Padrino",
//   },
//   {
//     id: 4,
//     titulo: "El Padrino II",
//   },
//   {
//     id: 5,
//     titulo: "El Padrino III",
//   },
// ];

// const peliculas = [];

const getPelicula = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!peliculas.length) {
        reject("No hay peliculas");
        return;
      }

      const pelicula = peliculas.find((pelicula) => pelicula.id === id);

      if (!pelicula) {
        reject("No encontramos la pelicula");
      }

      resolve(pelicula);
    }, 2000);
  });
};

// console.log(getPelicula(2))

// getPelicula(2)
//   .then(respuesta => console.log(respuesta))
//   .catch(error => console.error(error))

// GET => obtener datos
// POST => enviar datos
// PUT => actualizar datos
// DELETE => eliminar datos
// PATCH => actualizar datos puntual

// C.R.U.D
// Create
// Read
// Update
// Delete

// A.B.M
// Alta
// Baja
// Modificacion

// Then / Catch
// const getUsers = (id) => {
//   return fetch(`https://reqres.in/api/users/${id}`)
//     .then((res) => res.json())
//     .then(data => console.log(data.data))
//     .catch(error => console.error(error))
// }

// Async / Await
const getUsers = async (id) => {
  try {
    const res = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "GET",
    });
    const { data } = await res.json();
    console.log(data);
    return data;
  } catch (error) {}
};

const testUser = async () => {
  const user = await getUsers(2);
  document.getElementById("reloj").textContent = JSON.stringify(user);
};

// testUser()

// const createUser = (name, job) => {
//   return fetch("https://reqres.in/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: name, job: job }),
//   })
//     .then(respuesta => respuesta.json())
//     .then(data => console.log('usuario creado', data))
//     .catch(error => console.error(error))
// };


// createUser('Juan', 'Developer')