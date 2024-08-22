// getElementById()
// const logo = document.getElementById("logo")
// console.log(logo)
// console.dir(logo)
// logo.textContent = 'messi'.toUpperCase().split('').reverse().join('')

// const h1 = document.getElementById('titulo1')
// h1.textContent = 'ESTO ES EL DOM'

// getElementsByClassName()

// const listaLi = document.getElementsByClassName('link')
// console.log(listaLi)

// console.log(listaLi[0].textContent)
// console.log(listaLi[1].innerHTML)
// console.log(listaLi[2].innerText)
// console.log(listaLi.length)

// const links = [...listaLi]
// const links = new Array(listaLi)
// const links = Array.from(listaLi)

// links.forEach(link => console.log(link.textContent.toUpperCase()))

// for (let link of links) {
//   console.log(link.textContent)
// }

// getElementsByTAgname()
// const pTags = document.getElementsByTagName('p')
// console.log(pTags[0].innerHTML)
// const pTagsArray = [...pTags]
// pTagsArray.forEach((tag) => console.log(tag.innerText))

// querySelector()
// const caja1 = document.querySelector('#caja1')
// console.log(caja1.innerHTML)
// console.log(caja1.innerHTML)
// console.log(caja1.innerText)
// console.log(caja1.textContent)

// const caja2 = document.querySelector('.caja2')
// console.log(caja2)
// const pDiv = caja2.querySelector('p')
// console.log(pDiv.innerHTML)

// querySelectorAll()

// const li = document.querySelectorAll('.link2')
// console.log(li)
// console.log(li)

// li.forEach(elemento => console.log(elemento.innerHTML))

//

// Che documento quiero el elemento que tenga el SELECTOR tanto
// const p = document.getElementById('p')

// console.log(p)
// si no devuelve las propiedades del elemento podemos usar console.dir
// console.dir(p.innerHTML)
// p.innerText = 'Messi'.toUpperCase()
// const texto = 'Soy una variable'

// p.innerHTML = `Messi <hr class="hr"> <h2>${2 + 2}</h2>`
// p.innerHTML = "Messi " + texto + "<h2>Hola</h2>"

const link2 = document.querySelectorAll(".link2");
const links2Array = [...link2];
// console.log(links2Array);

// links2Array.forEach((link)=> {
//   const linkTexto = link.textContent.toUpperCase()
//   // console.log(linkTexto)
//   // link.innerHTML = link.innerHTML.toUpperCase()
//   link.textContent = `Ahora valgo: ${linkTexto}`
// })

// links2Array.map((link) => {
// link.innerHTML = 'holi'
// link.style.color = 'blue'
// link.classList.add('messi')
// })

const nombres = [
  "Ema",
  "nico",
  "lean",
  "adriel",
  "pablo",
  "javi",
  "joel y eze",
];

// const obj = {
// name: 'holi'
// }


const listaUl = document.getElementById('nombres')
// console.log(listaUl)

// listaUl.innerHTML = JSON.stringify(obj)

listaUl.innerHTML = nombres.map((nombre) => {
  return `<li>${nombre}</li>`
}).join('')

const productos = [
  {
    id: 1,
    nombre: "Smartphone Galaxy S21",
    precio: 799.99,
    stock: 20,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 2,
    nombre: "Camiseta de Algodón",
    precio: 19.99,
    stock: 50,
    categorias: ["Ropa"],
  },
  {
    id: 3,
    nombre: "Juego de Ollas de Acero Inoxidable",
    precio: 149.99,
    stock: 10,
    categorias: ["Hogar", "Cocina"],
  },
  {
    id: 4,
    nombre: "Smart TV 4K 55 pulgadas",
    precio: 699.99,
    stock: 15,
    categorias: ["Electrónica"],
  },
  {
    id: 5,
    nombre: "Zapatillas de Running Nike Air Max",
    precio: 129.99,
    stock: 30,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 6,
    nombre: "Robot Aspiradora Inteligente",
    precio: 299.99,
    stock: 5,
    categorias: ["Hogar", "Tecnología"],
  },
  {
    id: 7,
    nombre: "Tablet Samsung Galaxy Tab A",
    precio: 199.99,
    stock: 25,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 8,
    nombre: "Auriculares Inalámbricos Sony",
    precio: 89.99,
    stock: 40,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 9,
    nombre: "Chaqueta Impermeable Columbia",
    precio: 79.99,
    stock: 20,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 10,
    // img: '/img/imagen',
    nombre: "Licuadora de Alta Potencia",
    precio: 49.99,
    stock: 0,
    categorias: ["Hogar", "Cocina"],
  },
];

const productosContainer = document.querySelector('#productos')

productosContainer.innerHTML = productos.map(producto => {
  return `<div class="card">
    <img src="https://via.placeholder.com/250"/>
    <h2>${producto.nombre}</h2>
    <p>$${producto.precio / 2}</p>
    <span>Stock: ${producto.stock === 0 ? 'NO HAY STOCK' : producto.stock}</span>
    <ul>
      ${producto.categorias.map(categoria => {
        return`<li>${categoria}</li>`
      }).join('')}
    </ul>
  </div>`
}).join('')

// productos.map(producto => console.log(producto.precio))