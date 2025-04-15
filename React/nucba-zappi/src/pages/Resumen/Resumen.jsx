import { formatPrice } from "../../utils";

import CardResumen from "../../components/Resumen/CardResumen";
import Link from "../../components/UI/Link/Link";

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from "./ResumenStyles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Resumen = () => {
  const { orders } = useSelector((state) => state.orders);
  const [visitedOrder, setVisitedOrder] = useState(null);
  const { orderId } = useParams();

  useEffect(() => {
    const findOrder = orders.find((order) => order._id === orderId);
    setVisitedOrder(findOrder);
  }, [orders, orderId]);

  console.log(visitedOrder);
  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #{visitedOrder?._id.slice(0, 7)}</h1>
        <Link borderRadius="20" to="/mis-ordenes"></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        {/* <CardResumen /> */}
        {visitedOrder?.items.map((item) => (
          <CardResumen key={item._id} {...item} />
        ))}
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{formatPrice(visitedOrder?.shippingCost)}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;
