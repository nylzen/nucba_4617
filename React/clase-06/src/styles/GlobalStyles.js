import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --cactus: #5b8a72;
  --arena: #d9c3a6;
  --terracota: #c2785b;
  --marron: #8a5a44;
  --verde-olivo: #8b9a6a;
  --gris-piedra: #b0a391;
  --amarillo: #f2c85b;
  --text-white: #ffff;
  --logo: #e06b39;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
  list-style: none;
  text-decoration: none;
}
body {
background-color: #5b8a72;
color: white;
}
a {
  color: inherit;
}

`;
