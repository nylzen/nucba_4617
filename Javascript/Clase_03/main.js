// let edad = 18;

// Condicion es verdad ? si es verdad hace esto : SINO hace esto
// edad > 18
//   ? console.log("Eres mayor de edad")
//   : console.log("Eres menor de edad");

// if (edad > 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

// TODO: EJERCICIO TAREA

// if(condicion) {
//   codigo a ejecutar si es verdad
// }

//  BUCLES
// FOR

/*
 for (inicio; condicion; actualizacion) {
 .. codigo a ejecutar
 }
*/

// contador del 1 al 10
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// VAR NO

// for(let i = 1; i <= 10; i++){
//   // console.log(`El numero que estamos iterando es ${i}`)
//   // console.log(`====`)
//   console.log(i)
// }

/*
 1. Inicio, creamos una variable i que tiene el valor de 1
 2. Condicion, preguntamos si i es menor o igual a 10
 3. Si la condicion es falsa el bucle se termina
 4. Si es true ejecutamos lo que esta dentro del bloque(for)
 5. Actualiza, o sea incrementamos la variable i en 1 con el i++ (i va a valer 2)
 6. Vuelve al paso 2, evaluamos la condicion y asi sucesivamente hasta que de false y se corte
*/

// Break
// for(let i = 0; i <= 10; i++){
//   // if(i === 4){
//   //   break;
//   // }
//   if(i === 4) break;

//   console.log(i)
// }

//  Continue
// for (let i = 1; i <= 10; i++) {
//   if(i === 7) {
//     console.log(`Numero ${i} salteado`)
//     continue;
//   }

//   // if (i === 7) continue;

//   console.log(i);
// }

//  Ejercicio, quiero imprimir los numeros pares y los impares por separado

/*
Vamos a ver si el numero que tengo es divisible por 2 y si el resto da 0
creamos el bucle
evaluar si el numero es par o impar si n % 2 === 0
imprimir
*/

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`El numero ${i} es par`);
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
// }

// quiero saltearme los pares
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     // console.log(`El numero ${i} es par`);
//     // continue
//     // break
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
// }

// Ejercicio
//  Sumar todos los numeros desde n hasta n

/*
 Una variable para guardarme cuanto vale la suma total
 0 + 1 = 1
 1 + 2 = 3
 3 + 4 = 7
*/

// let suma = 0;
// // console.log(suma)
// for(let i = 1; i <= 25; i++){
//   console.log(`Vuelta: ${i}`)
//   console.log(`Suma vale: ${suma}`)
//   console.log(`Numero a sumar ${i} + ${suma}`)
//   // console.log(`Suma vale ahora: ${suma = suma + i}`)
//   console.log(`Suma vale ahora: ${suma += i}`)
//   console.log(`====================`)
// }

// WHILE

/*
 while (condicion){
  .. hacemos algo

  // para un contador
  actualizar++
 }
*/

// Contador del 1 al 10
// let i = 1

// while(i <= 10){
//   console.log(i)
//   i++
// }

// let i = 10
// while(i >= 1){
//   console.log(i)
//   i--
// }

// while(false){
//   console.log('Holis')
// }

// let contador = 1
// let suma = 0

// while(contador <= 10){
//   // suma = suma + contador
//   // suma += contador
//   contador++

// }
// console.log(suma)

// do ... while

// do {
//   .. hacemos algo
// } while (condicion)

//  Se ejecuta si o si una vez por mas que la condicion sea falsa.
// Primero hace despues pregunta
// do {
// console.log("tuki");
// console.log(Date.now())
// } while (false);

// For
/*
Para ejecutar una accion (codigo) N cantidad de veces
Tenemos 3 partes: Inicio, condicion y actualizacion
Lo usamos para recorrer cosas
*/

// While
/*
  Lo usamos cuando no sabemos la cantidad exacta de iteraciones
  Se ejecuta cuando la condicion es verdadera
*/

// Do While
/*
  Parecido al while pero nos aseguramos que al menos una vez se ejecute el codigo. Despues preguntamos es true o false, si es true sigue ejecutando si es false termina
*/

// Arrays
const nombres = [
  "Gustavo",
  "Pablo",
  "Nelson",
  "Javi",
  "Gabo",
  "Jenni",
  "Guido",
  "Mariano",
  "luis",
  "Messi",
  "Jorge",
  "Dibu",
];

// console.log(nombres)
// console.log(nombres[0])
// console.log(nombres[1])
// console.log(nombres[2])

// Metodo para saber la cantidad de elementos que hay en un array
// Length
// console.log(nombres.length);

// Regla para acordarse como escribir length
// Gato Tiene Hambre
// Go To Hell
// Gallina Tiene Huevo

// console.log(nombres.length)

// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i]);
// }

// For of

// for (let VARIABLE_A_CREAR of ARRAY){
//   codigo
// }

// for (let messi of nombres) {
//   console.log(messi)
// }

// forEach -- CLASE METODOS ARRAY
// nombres.forEach(nombre => console.log(nombre.toUpperCase()))

const scaloneta = ["Messi", "Dibu", "Taglia", "Fideo", "Julian"];

// Quiero escribir en un prompt el nombre de un jugador y que me diga si esta o no convocado

/*
 - El jugador a buscar ( que escribe el usuario )
 - Este jugador a buscar tiene que estar dentro del array, si esta imprimimos que esta y si no que no esta
*/

const jugadorABuscar = prompt("Que jugador estas buscando?").toLowerCase();
console.log(jugadorABuscar)
let jugadorEncontrado = false;

for (let jugador of scaloneta) {
  // console.log(jugador)
  if (jugador.toLowerCase() === jugadorABuscar) {
    jugadorEncontrado = true;
    break;
  }
}

if (jugadorEncontrado) {
  console.log(`El jugador ${jugadorABuscar} esta convocado`);
} else {
  console.log(`El jugador ${jugadorABuscar} NO esta convocado`);
}


// console.log('hola' === 'HOLA') // JS es caseSensitive es sensible a mayusculas y minusculas