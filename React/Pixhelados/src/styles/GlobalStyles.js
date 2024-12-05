import { createGlobalStyle } from "styled-components";

// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import pixel from "../assets/fonts/1up.ttf";
import pihelHeading from "../assets/fonts/Pixel-Digivolve.otf";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  @font-face {
    font-family: 'ms_sans_serif';
    src: url(${ms_sans_serif}) format('woff2');
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url(${ms_sans_serif_bold}) format('woff2');
    font-weight: bold;
    font-style: normal
  }

  @font-face {
    font-family: 'pixel';
    src: url(${pixel}) format('truetype');
    font-style: normal
  }

  @font-face {
    font-family: 'pixel-heading';
    src: url(${pihelHeading}) format('opentype');
    font-style: normal
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;

    &::selection {
      background: #1f2223;
      color: #20FC8F;
    }
  }
  
  body {
    background-color: #181a1b;
    -webkit-tap-highlight-color: transparent;
  }
`;
