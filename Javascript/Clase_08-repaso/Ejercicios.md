1. Filtrar productos por categoría:
Filtra los productos para obtener solo aquellos que pertenecen a la categoría "Ropa".

2. Traer en un nuevo array los nombres de los productos. BONUS: Usar destructuring

3. Encontrar productos agotados:
Encuentra y muestra los productos que tienen un stock igual a 0.

4. Calcular el valor total del inventario:
Calcula el valor total del inventario sumando el precio de todos los productos en stock.

5. Encontrar productos de tecnología:
Encuentra y muestra los productos que pertenecen a la categoría "Tecnología".

6. Ordenar productos por precio:
Ordena los productos por precio de menor a mayor.

7. Modificar el precio de todos los productos:
Aumenta el precio de todos los productos en un 10%.

8. Encontrar productos que pertenecen a múltiples categorías:
Encuentra y muestra los productos que pertenecen a más de una categoría (por ejemplo, "Electrónica" y "Tecnología").

9. Encontrar el producto más caro:
Encuentra el producto con el precio más alto.

10. Filtrar productos por precio:
Filtra los productos para obtener aquellos que tienen un precio menor o igual a $30.

11. Encontrar productos con nombres largos (más de 20 caracteres)

12. Encontrar productos con stock mínimo (menor o igual a 10 unidades)

13. Hacer una función que devuelva un nuevo array con los productos actuales pero que aquellos que valgan mas de $300 tengan un descuento del 50%

14. Calcular el promedio de precios de productos en la categoría "Ropa”

15. Crear un console.log que liste todos los productos con su nombre, precio, y categorías en un formato legible.

16. Filtra los productos para obtener aquellos cuyo precio esté en un rango específico, por ejemplo, entre $50 y $100.

17. Buscar productos por nombre



### Productos

```
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
```