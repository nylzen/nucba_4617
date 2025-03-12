import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./routes/AppRouter";
import { GlobalStyles } from "./styles/GlobalStyles";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      {/* <AppRouter /> */}
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;
