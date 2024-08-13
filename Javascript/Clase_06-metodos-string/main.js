// const obj = {
//   name: 'Tom',
//   saludar: function(){
//     console.log(`Hola, soy ${this.name}`);
//   }
// }

// obj.saludar()

// Length
// Devuelve el largo de la cadena
// go to hell
// gato tiene hambre
// gallina tiene huevo

// const string = 'Messi'
// console.log(string.length)

// const DNI = '2123123'

// if(!DNI.length) return
// console.log(DNI.length)

// if(DNI.length === 8) {
//   console.log('dni valido')
// } else {
//   console.error('DNI INVALIDO')
// }

// .toUpperCase() / .toLowerCase()

// console.log(string.toUpperCase())

// console.log(string.toLowerCase())

// const stringMinus = string.toLowerCase()
// console.log(stringMinus)
const string2 = "MESSI".toLowerCase();
// console.log(string2)

// console.log(stringMinus === string2)

// .replace(aReemplazar, replazado)
// REEMPLAZA LA PRIMER OCURRENCIA

const nuevoString = "Hola soy un string string";
// console.log(nuevoString)
// const searchValue = 'STRING'.toLowerCase()
// const resultado = nuevoString.replace(searchValue, 'cadena')
// console.log(resultado)

// .replaceAll(searchValue, replaceValue)
// const resultado = nuevoString.replaceAll('string', 'cadena')
// const string3 = 'a casa    '
// console.log(string3.replaceAll(' ', '/'))

// .indexOf()

const text = "Veamos la consola";
// console.log(text.indexOf('eamos'))
// console.log(text.indexOf('la'))
// console.log(text.indexOf('la', 16))

// .trim()
const stringTrim = "           HOLISSSSSSS              ";
// console.log(stringTrim)
// console.log(stringTrim.length)
// console.log(stringTrim.trim().length)

// const stringSinEspacios = stringTrim.trim()
// const stringLength = stringSinEspacios.length
// console.log(stringSinEspacios)
// console.log(stringLength)

// .split()

// const stringSplit = 'Hola/Soy/Un/String'
// const divideString = stringSplit.split('/')
// console.log(divideString)

// Dar vuelta un string
const string = "messi";
const reversedString = string.split("").reverse().join("");

// console.log(reversedString)

// Verificar si una palabra es palindromo, se leen igual al reves
// Hagan una funcion que verifique si es palindromo
const checkPalindrome = (str1, str2) => {
  const reversedStr = str1.split("").reverse().join("");

  console.log(reversedStr);
  console.log(str2);

  if (reversedStr === str2) {
    console.log(`${reversedStr} es igual a ${str2} por ende es palindromo`);
  } else {
    console.log("no es palindromo");
  }
};

// checkPalindrome('neuquen', 'neuquen')

// typeof

// const color = 'azul'
const color = 18;
// console.log(typeof color === 'string')
// if(typeof color !== 'string'){
//   console.log('Manda un string por favor')
// }

// .repeat()
// const nombreRepeat = 'Eze '
// console.log(nombreRepeat.repeat(1))

// .charAt()
// const nombreChar = 'Joel'
// console.log(nombreChar.charAt(2))
// console.log(nombreChar.charAt(23))

// .concat()
const stringConcat = "Hola";
// console.log(stringConcat.concat(' ', 'Mundo', ' ', 'Tuki'))

const arr = [1, 2, 3];
// console.log(arr.concat([4,5,6]))
// console.log([...arr, 4,5,6])

// .toLocaleLowerCase()
const palabra = "Hola, Cómo estás? ññññññññññ";
// console.log(palabra.toLowerCase())
// console.log(palabra.toLocaleLowerCase('es-AR'))

// .startsWith()

// const textoStart = 'Recursos de la clase'
// console.log(textoStart.startsWith('a'))
// console.log(textoStart.startsWith('R'))
// console.log(textoStart.toLowerCase().startsWith('recursos'))

// .endsWith()
const textoEnd = "Veamos la consola";
// console.log(textoEnd.endsWith('a'))
// console.log(textoEnd.endsWith('la'))
// console.log(textoEnd.endsWith('sola'))
// console.log(textoEnd.endsWith('hola'))

// .includes()
const texto = "Hola soy messi";
// console.log(texto.includes('messi'))
// if( texto.includes('messi')){
//   console.log('Me saludo messi')
// }

const array = ["azul", "amarillo", "azul"];

// console.log(array.includes("rojo"));
// console.log(array.includes("azul"));

// .slice()
const texto2 = 'Veamos la consola'
console.log(texto2.length)
// console.log(texto2.slice(0,5)) // veamo
// console.log(texto2.slice(0,6)) // veamos

const arr2 = [1,2,3,4,5]
// console.log(arr2.slice(-2))
// console.log(arr2.slice(0,2))

/*
funcion va a recibir 1 texto y 1 palabra,
la idea es buscar y verificar que la palabra este incluida en el texto

NO IMPORTA COMO ESTE ESCRITA, TIENE QUE ENCONTRARSE IGUAL
ej:

"HOLA SOY MESSI", 'MeSsI'
Hola soy messi, tiene que encontrar messi
*/

const checkWord = (texto, palabraABuscar) => {}

// metodos array
// .length

// .push
const arr3 = [1,2,3,4,5]
// arr3.push('MESSI')

// console.log(arr3)

// const eliminado = arr3.pop()
// console.log(eliminado)
// console.log(arr3)

// const duplicados = arr3.map(el => el * 2)
// console.log(duplicados)