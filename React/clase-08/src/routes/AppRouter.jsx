import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Productos/Products";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { Layout } from "../components/Layout/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<h1>About</h1>} />
          {/* Rutas anidadas */}
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":product" element={<ProductDetail />} />
          </Route>
          <Route path="login" element={<h1> Login </h1>} />

          {/* Ruta 404 */}
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
