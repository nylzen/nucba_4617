import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es requerido"),
  email: Yup.string()
    .email("El email es requerido")
    .required("El email es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),
});
