import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL_BASE;

export const createOrderApi = async (order, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        "x-token": token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error al crear la orden");
  }
};

export const getOrdersApi = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        'x-token': token
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error("Error al obtener las ordenes");
  }
}
