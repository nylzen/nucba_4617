// const arr = [1, 2, 3, 22, 11, 34, 101, 55, 5];

// console.log(arr)

// console.log(arr.sort())
// console.log(arr.sort((a,b) => a - b))
// console.log(arr.sort((a,b) => b - a))

// const str = ['z', 'b', 'c']
// console.log(str.sort())

// .reduce()
// Es una prensa, va prensando todos los elementos del array para obtener un unico valor
const arr = [1, 2, 45, 22, 11, 34, 101, 55, 5];

const sumaTotal = arr.reduce((acumulador, elemento) => {
  console.log(`Elemento: ${elemento}`);
  console.log(`Acumulador: ${acumulador}`);
  return acumulador + elemento;
}, 0);

console.log(sumaTotal);
