import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { CountContextProvider } from "./context/CountContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
    <GlobalStyles />
  </StrictMode>
);
