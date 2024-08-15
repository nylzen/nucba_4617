//  Length
// la longitud del array
const arr = [1, 2, 3, 4, 5];
// console.log(arr.length)

// if(!arr.length) return

// if(condicion){
//   hace tal cosa
// } else {
//   hace esto
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for (let item of arr) {
//   console.log(item)
// }

// .indexOf()
// Nos devuelve el indice de lo que estemos buscando
// const nombres = [
//   "Joel",
//   "Gustavo",
//   "Lean",
//   "Lucila",
//   "Jonatan",
//   "Chris",
//   "Javi",
// ];

// CASE SENSITIVE
// console.log(nombres.indexOf("Joel"));
// console.log(nombres.indexOf("Javi"));
// console.log(nombres.indexOf("Lean"));
// const resultado = nombres.indexOf("Lean");
// console.log(nombres[resultado + 1])
// console.log(nombres[resultado + 2])
// console.log(nombres[resultado + 3])

// .toString()
// Pasa el array a un string
// const arrString = nombres.toString()
// console.log(typeof arrString)
// console.log(typeof nombres)

// .concat()
// concatenamos arrays
// const otrosNombres = [
//   "Luis",
//   "Eze",
//   "Jorge",
//   "Mateo",
//   "Jose",
//   "Pablo",
//   "Gustavos",
// ];

// const estudiantes = nombres.concat(otrosNombres)
// const estudiantes = [...nombres, ...otrosNombres];
// console.log(estudiantes)

// .push()
// Pushea al final del array un nuevo elemento
// EL ARRAY ORIGINAL SE MODIFICA (MUTA)

// const animales = ["gato", "perro"];
// console.log(animales)
// animales.push('iguana')
// console.log(animales)
// animales.push([1,2,3,4,5])
// animales.push(true, {name: 'messi'}, 8)
// console.log(animales)

// const fun = () => {
//   let array = []

//   for (let i = 0; i < 5; i++){
//     array.push(i)
//   }

//   return array
// }

// console.log(fun())

// .unshift()
// Lo mismo que el push pero a la inversa, o sea agrega al principio
// const arr1 = [1,2,3]
// arr1.unshift(0)
// console.log(arr1)

// .pop()
// BOrramos el ultimo elemento y lo retorna por si lo queremos guardar

// const animales = ["gato", "perro", "caballo"];
// const animalEliminado = animales.pop()
// animales.pop()
// animales.pop()
// console.log(animales)
// console.log(`El animal eliminado fue: ${animalEliminado}`)

// .shift()
//  Lo mismo que el pop pero al reves. Borra el primero
// const animales = ["gato", "perro", "caballo"];
// console.log(animales)
// animales.shift()
// animales.shift()
// console.log(animales)
const arr2 = [1, 2, 3];
// console.log(arr2.toString())
// console.log(arr2)

// .join()
// Nos devuelve un string del array separado por lo que le pasemos por parametro

// console.log(estudiantes.toString())
// console.log(estudiantes.join(' | '))
// console.log(estudiantes.join(' 🍕 '))

// const separador = ' | ALGO | '
// console.log(estudiantes.join(separador))
// console.log(estudiantes.join(' | '))

// .reverse()
// Da vuelta el array
const numeros = [1, 2, 3, 4, 5];
const reves = numeros.reverse();
// console.log(reves)
// console.log(numeros)

// .slice()
// Nos devuelve UNA COPIA de la porcion del array que le indiquemos
// de donde hasta donde (inicio, fin (fin no incluido))
// console.log(estudiantes)
// const ultimos5 = estudiantes.slice(-5)
// console.log(estudiantes.slice(0,3))
// // console.log(estudiantes.slice(-5))
// console.log(estudiantes.slice(5))
// console.log(estudiantes.slice(3,11))

// console.log(ultimos5)
// console.log(estudiantes)

// ============== METODOS CALLBACK ===================

// .forEach()
// EJECUTA UNA ACCION POR CADA ELEMENTO Y NO DEVUELVE NADA.
const nombres = [
  "Joel",
  "Gustavo",
  "Lean",
  "Lucila",
  "Jonatan",
  "Chris",
  "Javi",
];

// nombres.forEach((nombre) => {
//   console.log(`Hola soy ${nombre.split('').reverse().join('')}`)
// })

// nombres.forEach(function(nombre) {
//   console.log(`Hola soy ${nombre.split('').reverse().join('')}`)
// })

// console.log(nombres)

// .map()
// const numerosMap = [1,2,3,4,5]
// const duplicados = numerosMap.map(numero => {
//   return numero * 2
// })

// const duplicados = numerosMap.map(numeros => numeros * 2)

// console.log(numerosMap)
// console.log(duplicados)
// console.log(numerosMap)

// .filter()
// devuelve un nuevo array con lo que cumpla la condicion

const numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numerosFilter.filter((numero) => {
  return numero % 2 === 0;
});

// console.log(pares)

// .find()
// Devuelve el primer elemento que cumpla la condicion

const numerosFind = [1, 3, 4, 5, 6, 7, 8];
const primerPar = numerosFind.find((numero) => {
  return numero % 2 === 0;
  // if(numero === 3){
  //   return numero
  // }
});

// console.log(primerPar)

// .every()
const numerosEvery = [1, 2, 4, 5, 6, 7, 8, 9];

// console.log(numerosEvery.every(numero => numero > 0))
// const mayores = numeros.every(numero => numero > 1)
// console.log(mayores)

// .some()

const numerosSome = [1, 2, 4, 5, 6, 7, 8, 9];

// console.log(numerosSome.some(numero => numero > 7 ))
// console.log(numerosSome.some(numero => numero > 10 ))

const productos = [
  {
    id: 1,
    nombre: "Camiseta de algodón",
    precio: 19.99,
    categoria: "Ropa",
    stock: 50,
  },
  {
    id: 2,
    nombre: "Zapatillas deportivas",
    precio: 89.99,
    categoria: "Calzado",
    stock: 25,
  },
  {
    id: 3,
    nombre: "Teléfono inteligente",
    precio: 599.99,
    categoria: "Electrónica",
    stock: 10,
  },
  {
    id: 4,
    nombre: "Portátil",
    precio: 899.99,
    categoria: "Electrónica",
    stock: 15,
  },
  {
    id: 5,
    nombre: "Libro de ciencia ficción",
    precio: 12.99,
    categoria: "Libros",
    stock: 30,
  },
  {
    id: 6,
    nombre: "Cafetera automática",
    precio: 49.99,
    categoria: "Electrodomésticos",
    stock: 20,
  },
  {
    id: 7,
    nombre: "Juego de mesa",
    precio: 24.99,
    categoria: "Juegos",
    stock: 40,
  },
  {
    id: 8,
    nombre: "Gafas de sol",
    precio: 29.99,
    categoria: "Accesorios",
    stock: 35,
  },
  {
    id: 9,
    nombre: "Mochila resistente al agua",
    precio: 39.99,
    categoria: "Accesorios",
    stock: 18,
  },
  {
    id: 10,
    nombre: "Silla de oficina ergonómica",
    precio: 149.99,
    categoria: ["Muebles", "accesorios"],
    stock: 12,
  },
];

// imprimir todos los nombres de los productos
// productos.forEach(producto => {
//   console.log(producto.nombre)
// })

// guardar en nuevo array los nombres de los productos en mayuscula
const nombresMayuscula = productos.map((producto) => {
  const nombreMayuscula = producto.nombre.toUpperCase();
  return nombreMayuscula;
});

// console.log(nombresMayuscula.join(' | \n'));

// todos los productos mayores a 50

const productosMayoresA50 = productos.filter((producto) => {
  return producto.precio > 50;
});

// console.log(productosMayoresA50)

// filtrar los elementos entre 20 y 100 que sean de la categoria accesorios

const productosEntre20y100 = productos.filter(producto => {
  return producto.precio >=20 && producto.precio <= 100
})

console.log(productosEntre20y100)