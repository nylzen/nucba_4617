// var _ = require('lodash');
import _ from "lodash";
import { productos } from "./data/products";


// chunk
const arraySegmentado = _.chunk(productos, 5);
// console.log(arraySegmentado)

const aleatorio = _.sample(productos)
// console.log(aleatorio)

const shuffle = _.shuffle(productos)

// console.log(shuffle)


fetch('https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(data => console.log(data.results))
  .catch(error => console.error(error))