// const arr = [1, 2, 3, 22, 11, 34, 101, 55, 5];

// console.log(arr)

// console.log(arr.sort())
// console.log(arr.sort((a,b) => a - b))
// console.log(arr.sort((a,b) => b - a))

// const str = ['z', 'b', 'c']
// console.log(str.sort())

// .reduce()
// Es una prensa, va prensando todos los elementos del array para obtener un unico valor
// const arr = [1, 2, 45, 22, 11, 34, 101, 55, 5];

// const sumaTotal = arr.reduce((acumulador, elemento) => {
//   console.log(`Elemento: ${elemento}`);
//   console.log(`Acumulador: ${acumulador}`);
//   return acumulador + elemento;
// }, 0);

// console.log(sumaTotal);

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
    nombre: "Licuadora de Alta Potencia",
    precio: 49.99,
    stock: 0,
    categorias: ["Hogar", "Cocina"],
  },
];

// 9. Encontrar el producto más caro:
// Encuentra el producto con el precio más alto.
// const productoMasCaro = productos.reduce((max, producto) =>
//   producto.precio > max.precio ? producto : max
// // );

// const productoMasCaro = productos.reduce((max, producto) => producto.precio > max.precio ? producto : max, );

// console.log(productoMasCaro)

// const precios = productos.map(producto => producto.precio)
// console.log(precios)

// const precioMax = Math.max(...precios)
// console.log(precioMax)

// const productoMasCaro = productos.find(producto => producto.precio === precioMax)

// console.log(productoMasCaro)

// 15. Crear un console.log que liste todos los productos con su nombre, precio, y categorías en un formato legible.

// productos.forEach((producto) => {
//   const { nombre, precio, categorias } = producto;

//   console.log(`Nombre: ${nombre}, Precio ${precio}, Categorias: ${categorias}`);
// });

// productos.forEach(({nombre,precio, categorias}) => {
//   // const { nombre, precio, categorias } = producto;

//   console.log(`Nombre: ${nombre}, Precio ${precio}, Categorias: ${categorias}`);
// });

// 16. Filtra los productos para obtener aquellos cuyo precio esté en un rango específico, por ejemplo, entre $50 y $100./

const productosEnRangoPrecio = (array, rango1, rango2) => {
  return array.filter(producto => producto.precio >= rango1 && producto.precio <= rango2)
}

console.log(productosEnRangoPrecio(productos, 50, 100))


// const value = '     asdfasdfsdaasfd      '.trim().toUpperCase()
// const string = 'ASDFASDFASDFASD'