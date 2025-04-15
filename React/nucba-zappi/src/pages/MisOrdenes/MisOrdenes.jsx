import { useNavigate } from "react-router-dom";

import CardsMisOrdenes from "../../components/MisOrdenes/CardsMisOrdenes";
import Button from "../../components/UI/Button/Button";

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from "./MisOrdenesStyles";
import { useSelector } from "react-redux";
import { useOrders } from "../Checkout/hooks/useOrders";
import { useEffect } from "react";

const MisOrdenes = () => {
  const navigate = useNavigate();

  const { orders } = useSelector((state) => state.orders);

  const { getOrders } = useOrders();

  useEffect(() => {
    if (!orders) {
      getOrders();
    }
  }, [orders, getOrders]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate("/")}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
      <MisOrdenesPatternStyled
        src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png"
        alt=""
      />
    </>
  );
};

export default MisOrdenes;
