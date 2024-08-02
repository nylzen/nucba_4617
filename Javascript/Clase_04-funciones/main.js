// alert('HOlis')

// Armar un programa que reste dos numeros
// Una variable para el num1
// Una variable para el num2
// Una variable resultado
// mostrar ese resultado

// let num1 = 15
// let num2 = 7
// let resultado = num1 - num2
// console.log(`El resultado es: ${resultado}`)

// Declaramos una funcion con sus instrucciones
// function nombre_funcion(PARAMETROA, PARAMETROB .....){}
// nombre_funcion()

// function resta() {
//   let num1 = 17;
//   let num2 = 7;
//   let resultado = num1 - num2;
//   console.log(`El resultado es: ${resultado}`);
// }

// Ejecutar / invocar
// resta(10, 5)
// resta(15, 20)

// function resta(numeroA = 0, numeroB = 5){
//   console.log(numeroA, numeroB)
// }

// resta() // undefined undefined | 0 y 5 porque le dimos valores por defecto
// resta(1) // 1 undefined. Porque tenemos el valor del primer parametro
// resta(1,2) // 1 2 porque tenemos los dos valores

// function resta(a, b) {
//   console.log(a - b)
// }

// resta(10, 7)
// resta(14, 7)
// resta(11, 7)

function sumar(a, b) {
  // console.log(a + b)
  return a + b;
}

// console.log(sumar(2,2))
const a = sumar(2, 2); // 4
// const a = 4
const b = sumar(5, 10); // 15

// console.log(a)
// console.log(b)

// console.log(sumar(a, b))

// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

// console.log(saludar('Messi'))
// console.log(saludar('Nelson'))

// Funciones flecha
// function nombre(){}
// const nombre = () => {}

// function sumar(a,b) {
//   // console.log(a + b)
//   return a + b
// }
const nombre = "hola";

const sumarFlecha = (a, b) => {
  console.log(nombre);
  return a + b;
};

const sumarFlechaSimplificada = (a, b) => a + b;

function sumarFlechaTradicional(a, b) {
  return a + b;
}

// console.log(sumarFlecha(2, 2));
// console.log(sumarFlechaSimplificada(8,2))

// hola()
// function hola(){
//   console.log('Hola')
// }

// hola()

// const hola = () => {
//   console.log('Hola')
// }

// const algo = (a, b) => {
//   console.log(a);
//   const resultado = sumar(a, b);
//   // return `El resultado es ${resultado}`;
//   return algo()
// };

// console.log(algo(100,100))

// Funciones recursivas

// Cuenta atras
// for(let i = 5; i >= 1; i--){
//   console.log(i)
// }

const cuentaAtras = (num) => {
  // Caso base
  if (num <= 0) {
    return;
  }

  // Imprimimos
  console.log(num);

  // recursion

  return cuentaAtras(num - 1);
};

// cuentaAtras(5);

/*
1. El parametro es 5
2. Evaluamos si el 5 es menor o igual a 0
3. No, imprime el numero
4. La funcion se vuelve a llamar a si misma con el parametro pasado (5) - 1 o sea 4
---
.. Bucle hasta que el parametro sea 0 y se corte la ejecucion de la funcion porque le pusimos un return
*/

const duplicarNumero = (num) => {
  // validar el numero
  num = num * 2;
  // 5 = 5 + 5
  console.log(num);
  // Caso base
  if (num > 100) {
    return;
  }

  return duplicarNumero(num);
  // retornar la recursion
};

// duplicarNumero(5);

// Callback
const alertHola = (nombre) => {
  return alert(`Hola ${nombre}`);
};

const consoleHola = (nombre) => {
  return console.log(`Hola ${nombre}`);
};

// consoleHola('Messi')
// alertHola('Messi')

const saludar = (formaSaludo) => {
  // const nombre = prompt("Pone tu nombre");
  const nombre = "Messi";
  // console.log(nombre);
  formaSaludo(nombre);
};

// saludar(); // ERROR => undefined
// saludar('pepito')
// console.log(consoleHola)
// saludar(consoleHola)

// console.log(alertHola)
// console.log(sumar)

const names = ["Joel", "Adriel", "Pablo", "Javier"];
// console.log(names)

// names.forEach((nombre) => {
//   console.log(nombre);
// });

const nums = [2, 3, 4, 65, 2, 234];

// nums.map((numero) => console.log(numero * 2));

// nums.map(function (numero) {
//   console.log(numero * 5);
// });

const func = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
};

// func(10)
// func(50)
