import React, { useContext } from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import AuthContext from "../context/AuthContext";
import Contacto from "../pages/contacto/Contacto";
import Error404 from "../pages/error404/Error404";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Product from "../pages/productos/Product";
import Section from "../pages/section/Section";
import User from "../pages/user/User";

function Routes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Layout>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="product">
          <Route index element={<Product />} />
          <Route path=":product" element={<Section />} />
        </Route>
        <Route path="contacto" element={<Contacto />} />
        {!isAuth && <Route path="login" element={<Login />} />}
        <Route
          path="usuario/:username"
          element={
            <ProtectedRoute redirectTo="/login">
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </ReactDomRoutes>
    </Layout>
  );
}

export default Routes;
