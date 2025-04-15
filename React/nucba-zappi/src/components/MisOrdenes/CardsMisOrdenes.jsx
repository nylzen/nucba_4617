import { useSelector } from "react-redux";
import CardMisOrdenes from "./CardMisOrdenes";
import { MisOrdenesContainerStyled } from "./CardMisOrdenesStyles";

const CardsMisOrdenes = () => {
  const { orders } = useSelector((state) => state.orders);

  return (
    <MisOrdenesContainerStyled>
      {orders.length ? (
        orders.map((order) => <CardMisOrdenes key={order._id} {...order} />)
      ) : (
        <h2>No hay ordenes</h2>
      )}
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
