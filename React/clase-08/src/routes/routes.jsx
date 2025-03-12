import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Productos/Products";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ":product",
        element: <ProductDetail />,
      },
    ],
  },
]);
