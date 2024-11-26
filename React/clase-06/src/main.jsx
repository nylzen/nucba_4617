import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextoProvider } from "./context/MiContexto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextoProvider>
      <App />
    </ContextoProvider>
  </StrictMode>
);
