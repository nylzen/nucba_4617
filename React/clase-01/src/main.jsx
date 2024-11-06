import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstApp } from "./FirstApp";
// import { Otro } from "./Otro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstApp />
    {/* <Otro/> */}
  </StrictMode>
);
