// import { nombreFn/Variable } from 'donde?'
// import { nombre } from "./utils/utils.js";
// import { nombre } from "./utils/utils.js";
// console.log(nombre);

// Opcion 1 - Importar todo
// import * as fn from './utils/utils.js'
// fn.saludar('Messi')
// fn.despedir('Leo')
// console.log(fn.nombre)

// Opcion 2 - Importar algo especifico MAS USADO

// import { nombre, saludar } from "./utils/utils.js";

// saludar(nombre)
const saludar = "Hola";

// Opcion 3 - importar y renombrar

import { saludar as saludo } from "./utils/utils.js";

// console.log(saludar);
// saludo("algo");
