import { useFormik } from "formik";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";
import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurn.styles";
import { initialValues } from "./formik/initial-values";
import { validationSchema } from "./formik/validation-schema";

function FormTurn() {
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form", values);
    },
  });
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Form>
        <Input
          label="Nombre"
          type="text"
          name="name"
          {...getFieldProps("name")}
          isError={touched.name && errors.name}
        />
        <Input
          label="Apellido"
          type="text"
          name="lastName"
          {...getFieldProps("lastName")}
          isError={touched.lastName && errors.lastName}
        />
        <Input
          label="Fecha"
          type="date"
          {...getFieldProps("date")}
          isError={touched.date && errors.date}
        />
        <Input
          label="Edad"
          type="number"
          {...getFieldProps("age")}
          isError={touched.age && errors.age}
        />
        <Input
          label="Correo Electronico"
          type="email"
          {...getFieldProps("email")}
          isError={touched.email && errors.email}
        />
        <Input
          label="Telefono"
          type="tel"
          {...getFieldProps("phone")}
          isError={touched.phone && errors.phone}
        />
        <TextAreaInput
          label="¿Cómo escuchaste de nosotros?"
          {...getFieldProps("message")}
          isError={touched.message && errors.message}
        />
        <Submit onSubmit={handleSubmit} />
      </Form>
    </FormBox>
  );
}
export default FormTurn;
