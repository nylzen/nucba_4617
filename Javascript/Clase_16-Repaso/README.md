

## DOM

### 1. Mostrar la lista de productos
Crea una página que muestre todos los productos del array en una lista.
Cada producto debe mostrar su nombre, precio, imagen y categorías.

### 2.Resaltar productos con un precio superior a X
Mostrar en el html los productos mayores a 200 con un background naranja


### 3. Filtrar productos por UNA categoria a eleccion
Crear un boton (por ejemplo, "Tecnología", "Hogar", "Deporte")
Escuchar cuando se haga clic en el botón
Ejecutar una funcion que reciba una categoria por parametro y filtrar el array de productos
Renderizar los nuevos productos

### 4. Buscador de productos
Crear un input de tipo texto
Escuchar el evento del tipo input

### 5. Guardar producto en el LocalStorage (Carrito)
Agregar a cada boton de producto un data-producto que guarde el nombre del producto
Agregar un escuchador de eventos de tipo click al contenedor de productos
Si lo que estoy clickeando (e.target.tagName) es una etiqueta de tipo BUTTON guardar en una variable el dataset de ese producto (e.target.dataset.producto)
Una vez guardado el nombre del producto en la variable, pushear el producto a un array llamado carrito
Por último guardar el array en el localstorage

### 6. Mostrar cuantos productos tengo en el localstorage
Crear un span en el html
Cambiar el texto de ese span segun la cantidad de productos que tengamos en el html


## Metodos de array

### Filtrar Productos por Categoría
Crear una funcion que reciba por parametro una categoria y muestre por consola los productos de esa categoria

### Calcular el Precio Total de Todos los Productos
Crear una funcion que muestre el precio total de todos los productos

### Crear un Array de Objetos con Nombre y Precio
Crear un nuevo array de objetos que contengan solo el nombre y el precio de cada producto.

### Buscar Productos que Contengan una Palabra en el Nombre
Crear una funcion que reciba un nombre de producto y mostrar los productos que coincidan con ese nombre por consola

### Encontrar un producto por id
Crear una funcion que reciba un id por parametro y me muestre por consola el producto encontrado, si no existe mostrar que no existe

```const productos = [
  {
    id: 1,
    nombre: "Camiseta Deportiva",
    precio: 19.99,
    categorias: ["ropa", "deporte"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nombre: "Zapatillas Running",
    precio: 59.99,
    categorias: ["calzado", "deporte"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    nombre: "Smartphone X",
    precio: 399.99,
    categorias: ["tecnologia", "moviles"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    nombre: "Auriculares Bluetooth",
    precio: 29.99,
    categorias: ["tecnologia", "audio"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    nombre: "Laptop Gaming",
    precio: 999.99,
    categorias: ["tecnologia", "computadoras"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    nombre: "Mochila Escolar",
    precio: 24.99,
    categorias: ["accesorios", "educacion"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 7,
    nombre: "Botella de Agua Reutilizable",
    precio: 9.99,
    categorias: ["hogar", "deporte"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 8,
    nombre: "Monitor 4K",
    precio: 299.99,
    categorias: ["tecnologia", "oficina"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 9,
    nombre: "Teclado Mecánico",
    precio: 79.99,
    categorias: ["tecnologia", "accesorios"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 10,
    nombre: "Silla Ergonómica",
    precio: 189.99,
    categorias: ["oficina", "hogar"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 11,
    nombre: "Cafetera Automática",
    precio: 149.99,
    categorias: ["hogar", "cocina"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 12,
    nombre: "Barra de Sonido",
    precio: 129.99,
    categorias: ["audio", "tecnologia"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 13,
    nombre: "Cámara Digital",
    precio: 499.99,
    categorias: ["fotografia", "tecnologia"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 14,
    nombre: "Lámpara LED Inteligente",
    precio: 39.99,
    categorias: ["hogar", "tecnologia"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 15,
    nombre: "Bicicleta de Montaña",
    precio: 399.99,
    categorias: ["deporte", "exterior"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 16,
    nombre: "Drone con Cámara",
    precio: 299.99,
    categorias: ["tecnologia", "fotografia"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 17,
    nombre: "Parlante Portátil",
    precio: 49.99,
    categorias: ["audio", "tecnologia"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 18,
    nombre: "Freidora de Aire",
    precio: 89.99,
    categorias: ["hogar", "cocina"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 19,
    nombre: "Colchón Ortopédico",
    precio: 299.99,
    categorias: ["hogar", "salud"],
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 20,
    nombre: "Reloj Inteligente",
    precio: 199.99,
    categorias: ["tecnologia", "accesorios"],
    imagen: "https://via.placeholder.com/150"
  }
];
```
