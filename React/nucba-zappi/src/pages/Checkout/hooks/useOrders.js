import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderApi, getOrdersApi } from "../services/services";
import {
  createOrderFail,
  getOrdersFail,
  setOrders,
} from "../../../redux/slices/orders/ordersSlice";

export const useOrders = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  // obtener ordenes
  const getOrders = async () => {
    setIsLoading(true);

    try {
      const orders = await getOrdersApi(currentUser.token);
      dispatch(setOrders(orders));
    } catch (error) {
      dispatch(getOrdersFail(error));
    } finally {
      setIsLoading(false);
    }
  };

  // crear ordenes
  const createOrder = async (orderData) => {
    setIsLoading(true);
    try {
      const response = await createOrderApi(orderData, currentUser.token);
      await getOrders();
      return response;
    } catch (error) {
      dispatch(createOrderFail("Error al crear la orden"));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createOrder,
    getOrders,
  };
};
