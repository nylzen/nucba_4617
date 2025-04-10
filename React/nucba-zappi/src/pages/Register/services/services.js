import axios from "axios";
import { toast } from "sonner";

// {import.meta.env.VITE_API_URL
const BASE_URL = import.meta.env.VITE_URL_BASE; // Esto seria el .env / OJO esto hay que agregarlo a mano en el hosting ya sea vercel/netlify/etc

export const createUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });

    return response;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.errors[0].msg)
  }
};
