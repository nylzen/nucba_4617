import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --bg: #131415;
    --nav-bg: #282828;
    --text-white: #ffffff;
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
    --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
    --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {

    background-color: var(--bg);
    font-family: 'Poppins';
    color: var(--text-white);
  }

  a {
    color: inherit;
  }
`;
