import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Productos/Products";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { Layout } from "../components/Layout/Layout";
import { User } from "../pages/User/User";
import { Login } from "../pages/Login/Login";
import AuthProvider from "../context/AuthContext";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Rutas anidadas */}
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":product" element={<ProductDetail />} />
            </Route>
            <Route path="login" element={<Login />} />

            <Route
              path="/user/:username"
              element={
                <ProtectedRoute redirecTo={"/login"}>
                  <User />
                </ProtectedRoute>
              }
            />

            {/* Ruta 404 */}
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};
