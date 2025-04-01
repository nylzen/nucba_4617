import * as Yup from "yup";

const phoneRegex = /^\d{10}$/;

export const validationSchema = Yup.object({
  name: Yup.string().trim().required("El nombre es requerido"),
  lastName: Yup.string().trim().required("El apellido es requerido"),
  date: Yup.date().required("La fecha es requerida"),
  age: Yup.number()
    .integer("Deber un entero")
    .moreThan(16, "Deber ser mayor a 16 años")
    .lessThan(95, "Deber ser menor a 95 años")
    .required("La edad es requerida"),
  email: Yup.string()
    .email("Deber ser un email valido")
    .required("El email es requerido"),
  phone: Yup.string()
    .matches(phoneRegex, "Deber ser un numero de telefono valido")
    .required("El telefono es requerido"),
  message: Yup.string()
    .max(100, "Deber ser menor a 100 caracteres")
    .notRequired(),
});
