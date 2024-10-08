function task1(a, b) {
  return a + b;
}

function task2(a, b) {
  return task1(a, b) / 2;
}

let x = task2(2, 2);

// console.log(x);

// Memory Heap
// const obj1 = {valor: 1}
// const obj2 = obj1

// console.log(obj1, obj2)

// obj1.valor = 2

// console.log(obj1.valor)
// console.log(obj2.valor)

// console.log(obj1 === obj2)

// const obj3 = {...obj1}
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// obj3.valor = 3
// console.log(obj3)

// console.log(obj1 === obj3)

// Event loop

// console.log('buenas')

// setTimeout(() => {
//   console.log('Nucba')
// }, 2500)

// console.log('tuki')


console.log('Inicio');

function task1(a, b) {
  let resultado = a + b
  return resultado
}

setTimeout(function tuki() {
    console.log('Timeout');
}, 1000);

console.log('Fin');


function task2(a, b) {
  let resultado = task1(a, b) / 2;
  return resultado
}


function mostrarResultado(){
  let x = task2(10, 2);
  console.log(x)
}

mostrarResultado()

// https://www.jsv9000.app/


// fetch('https://rickandmortyapi.com/api/character')

console.log('asdfsad')
const tuki = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')

  const json = await response.json()
  return json
}


tuki()
console.log('111111111')

// fetch('...').then().then().then()

document.getElementById('btn').addEventListener('click', () => console.log('messi'))

const arr = [1,2,3,4,5]

const productos = [
  {
    id: 1,
    nombre: "Laptop Pro",
    img: "https://via.placeholder.com/150",
    precio: 1500,
    categorias: ["Electrónica", "Computadoras"],
    descripcion: "Una laptop poderosa con pantalla retina y rendimiento increíble."
  },
  {
    id: 2,
    nombre: "Auriculares Inalámbricos",
    img: "https://via.placeholder.com/150",
    precio: 200,
    categorias: ["Accesorios", "Audio"],
    descripcion: "Auriculares Bluetooth con sonido envolvente y cancelación de ruido."
  },
  {
    id: 3,
    nombre: "Smartphone X",
    img: "https://via.placeholder.com/150",
    precio: 900,
    categorias: ["Electrónica", "Móviles"],
    descripcion: "Un smartphone con cámara de alta resolución y pantalla OLED."
  },
  {
    id: 4,
    nombre: "Smartwatch",
    img: "https://via.placeholder.com/150",
    precio: 300,
    categorias: ["Accesorios", "Wearables"],
    descripcion: "Reloj inteligente con seguimiento de salud y notificaciones."
  },
  {
    id: 5,
    nombre: "Cámara Reflex",
    img: "https://via.placeholder.com/150",
    precio: 1200,
    categorias: ["Electrónica", "Fotografía"],
    descripcion: "Cámara profesional con lente intercambiable y resolución 4K."
  },
  {
    id: 6,
    nombre: "Teclado Mecánico",
    img: "https://via.placeholder.com/150",
    precio: 100,
    categorias: ["Accesorios", "Periféricos"],
    descripcion: "Teclado mecánico con retroiluminación RGB y switches personalizados."
  },
  {
    id: 7,
    nombre: "Mouse Inalámbrico",
    img: "https://via.placeholder.com/150",
    precio: 50,
    categorias: ["Accesorios", "Periféricos"],
    descripcion: "Mouse ergonómico con sensor de alta precisión y conexión inalámbrica."
  },
  {
    id: 8,
    nombre: "Monitor 4K",
    img: "https://via.placeholder.com/150",
    precio: 400,
    categorias: ["Electrónica", "Monitores"],
    descripcion: "Monitor de 27 pulgadas con resolución 4K UHD y tecnología HDR."
  },
  {
    id: 9,
    nombre: "Silla Gamer",
    img: "https://via.placeholder.com/150",
    precio: 250,
    categorias: ["Muebles", "Gaming"],
    descripcion: "Silla ergonómica para gamers con soporte lumbar y reclinación ajustable."
  },
  {
    id: 10,
    nombre: "Tablet Pro",
    img: "https://via.placeholder.com/150",
    precio: 700,
    categorias: ["Electrónica", "Tablets"],
    descripcion: "Tablet con pantalla retina y soporte para lápiz óptico."
  },
]


const cont = document.querySelector('.container')

// cont.innerHTML = arr.map((el) => `<p style='padding: 2rem;'>${el}</p>`).join('')

cont.innerHTML = productos.map((producto) => {
  return `
  <div>
    <img src='${producto.img}'>
    <h2>${producto.nombre}</h2>
  </div>
  `
}).join('')

const arr2 = [1,2,2,2]
console.log(arr2.map(n => n * 2).join('/'))