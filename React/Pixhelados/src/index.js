import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const tokyoDark = {
  name: "tokyoDark",
  anchor: "#1034a6",
  anchorVisited: "#440381",
  borderDark: "#1f2223", // Borde Oscuro (1)
  borderDarkest: "#070809", // Borde RE Oscuro (2)
  borderLight: "#5e696a", // Borde Clarito (2)
  borderLightest: "#93a0a1", // Borde RE Clarito (1)
  canvas: "#2f3435", // Fondo del input container (?)
  canvasText: "#F4F4ED",
  canvasTextDisabled: "#1f2223",
  canvasTextDisabledShadow: "#93a0a1",
  canvasTextInvert: "#ffffff",
  checkmark: "#F4F4ED",
  checkmarkDisabled: "#1f2223",
  desktopBackground: "#181a1b", // Fondo Primario
  flatDark: "#9e9e9e",
  flatLight: "#d8d8d8",
  focusSecondary: "#20FC8F",
  headerBackground: "#1f2223",
  headerNotActiveBackground: "#5e696a",
  headerNotActiveText: "#F4F4ED",
  headerText: "#F4F4ED",
  hoverBackground: "#F61067",
  material: "#465051", // Fondo secundario
  materialDark: "#1f2223",
  materialText: "#F4F4ED", // Texto
  materialTextDisabled: "#1f2223",
  materialTextDisabledShadow: "#93a0a1",
  materialTextInvert: "#ffffff",
  progress: "#F61067",
  tooltip: "#fefbcc",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={tokyoDark}>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
