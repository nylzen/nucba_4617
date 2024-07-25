// Hoisting
// var nombre;
// console.log(nombre)

// nombre = 'Messi'
// var nombre = 'Messi'
// let nombre = 'Messi'

// function saludar(){
//   console.log('Holis')
// }

// Scope
const hola = "Holaaaaaaaa"; // global porque puedo acceder desde cualquier parte de mi codigo

function saludar() {
  // console.log('Holis')
  console.log(hola);
}

// if(true) {
//   console.log(hola)
// }

// saludar()

// function holas() {
//   if (true) {
//     var nombre = "Messi";
//   }
//   console.log('Hola dsde la fn', nombre)
// }

// holas()
// console.log(nombre);

// let texto;

// texto = 'Holis'
// const number = 1;

// var a = 'Soy una variable'
// const a = 'Soy una variable'
// let a = 'Soy una variable'
// console.log(a) // es global
// let h = 'Holis'

function holi() {
  var b = "Estoy adentro de una funcion";
  console.log(b);
  console.log(h);
}

// holi()
// console.log(b) // La variable b es local solo funciona dentro del bloque de la funcion

{
  var c = "Estoy adentro ed unas llaves";
}

// console.log(c)

{
  let d = "Soy let";
  const e = "Soy una const";
}

// console.log(d)
// console.log(e) // variables locales respetan el bloque (let / const)

if (true) {
  let f = "Estoy dentro deun condicional";
}

// console.log(f)

// for(let i = 0; i < 10; i++){
//   let uno = 1
// }

// console.log(i)
// console.log(uno)

// Operadores
// let numero = 11;

// numero = numero + 2
// numero += 2

// numero = numero - 5
// numero -= 5

// numero *= 2
// numero /= 2
// console.log(numero)

// Operadores
// console.log( 5 > 10 )
// console.log(5 > 2)

// == | Es igual a == b
// Comparamos solamente el valor
// console.log(5 == '5')

// === | Es ESTRICTAMENTE iugal a === b
// Comparamos tipo de dato y valor.
// console.log(5 === '5') // tipos de datos diferentes
// console.log('HOLA' === 'HOLA')

// console.log(18 != '18')
// console.log(18 != '18')

// const nombre = 'Nelson'
// console.log(nombre === 'Nelson')

//  Es menor o igual que a <= b
// console.log( 9 <= 10)

//  Es mayor o igual que a >= b
// console.log(10 >= 10)

// const password = ''

// if(!password.length) {
//   console.log('hola')
// }

// if(password.length > 8){
//   console.log('pass ok')
// } else {
//   console.log('reescribi la pw')
// }

//  && | Operador AND
// console.log(18 > 7 && 6 > 5 && "Nelson" === "Nelson");
// console.log(18 < 5 && 6 > 5 && 10 > 5)

// || | Operador OR
// console.log(5 > 10 || 5 < 10)

// ! | Negacion
// console.log(!false)

//  Condiciones
//  if ( condicion ) {
//  Codigo a ejecutar
// }

const edadUsuario = 14;
const edadPermitida = 18;

// Si el usuario tiene 18 puede tomar una birra, si no, se toma un jugo
// console.log(edadUsuario >= edadPermitida)
// console.log(edadUsuario > edadPermitida)

// if (edadUsuario >= edadPermitida) {
//   console.log("-----");
//   console.log("Puede tomar una birrita");
//   console.log("-----");
// }

// console.log("Mi codigo sigue aca ....");

//  if Else
// if (edadUsuario >= edadPermitida) {
//   console.log("-----");
//   console.log("Puede tomar una birrita");
//   console.log("-----");
// } else {
//   console.log('Toma un agua / jugo')
// }

// if (edadUsuario < edadPermitida) {
//   console.log('Toma un agua')
// }

// let llueve = true;

// if (!llueve) {
//   console.log("Saca el paraguas");
// } else {
//   console.log("No saques el paraguas");
// }

// if (!(10 > 1)) {
//   console.log("es mayor");
// }

// const numerito = 21

// console.log(numerito % 2)
// // console.log(0 === 0)

// if(numerito % 2 === 0 ) {
//   console.log("Es par")
// } else {
//   console.log('Es impar')
// }

// Poner varias condiciones if else if else
// if(condicion) {
//   tal cosa
// } else if (condicion) {
//   tal otra cosa
// } else {
//   tal otra
// }
// Validar que tipo de numero tenemos, si es positivo, negativo o cero

// const numero = prompt('Ingresa un numero')
// const numero = -10

// if(numero > 0) {
//   console.log('Es positivo')
// } else if (numero < 0) {
//   console.log('Es negativo')
// } else {
//   console.log('EL numero es 0')
// }

// TAREA !!!!!!!
// Si la persona tiene entre 1 y 12 es niño
// Si la persona tiene entre 13 y 18 es adolescente
// Si la persona tiene entre 19 y 50 es adulto
// Si no es una persona mayor

// Switch
const mascota = "Gato";

// if (mascota === "Perro") {
//   console.log("Tengo un perro");
// } else if (mascota === "Loro") {
//   console.log("Tengo un loro");
// } else if (mascota === "pato") {
//   console.log("Tengo un pato");
// } else if (mascota === "Gato") {
//   console.log("Tengo un gato");
// } else {
//   console.log("No tengo mascota");
// }

// if (mascota === "Perro") {
//   console.log("Tengo un perro");
// }

// if (mascota === "Loro") {
//   console.log("Tengo un loro");
// }

// if (mascota === "pato") {
//   console.log("Tengo un pato");
// }

// if (mascota === "Gato") {
//   console.log("Tengo un gato");
// }

// console.log("No tengo mascota");

// Pasar esto a switch
// switch (mascota) {
//   case "Perro":
//     console.log("Tengo un perro");
//     break;
//   case "Loro":
//     console.log("Tengo un loro");
//     break;
//   case "Gato":
//     console.log("Tengo un gato");
//     break;
//   default:
//     console.log("No tengo nada");
//     break;
// }

// Ternarios

let edad = 18;

if (edad >= 18) {
  console.log("Es mayor");
} else {
  console.log("Es menor");
}

// edad >= 18 ? console.log(`Es mayor`) : console.log(`Es menor`);
// console.log(edad >= 18 ? `Es mayor` : `Es menor`)

// if( edad > 18) {
//   'Es mayor'
// } else if ( edad < 18) {
//   'Es menor'
// } else {
//   'Tiene 18'
// }

// console.log(edad > 18 ? `Es mayor` : edad < 18 ? "Es menor" : "Tiene 18");
