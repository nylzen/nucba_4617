import { Formik } from "formik";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";
import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurn.styles";
import { initialValues } from "./formik/initial-values";
import { validationSchema } from "./formik/validation-schema";
import { useState } from "react";

function FormTurnFormikComponents() {
  // const { handleSubmit, getFieldProps, errors, touched } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     console.log("Form", values);
  //   },
  // });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("Form", values);
          } catch (error) {
            console.log("Error", error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Input
              label="Nombre"
              name="name"
              type="text"
              isError={touched.name && errors.name}
            />
            <Input
              label="Apellido"
              name="lastName"
              type="text"
              isError={touched.lastName && errors.lastName}
            />
            <Input
              label="Fecha"
              name="date"
              type="date"
              isError={touched.date && errors.date}
            />
            <Input
              label="Edad"
              name="age"
              type="number"
              isError={touched.age && errors.age}
            />
            <Input
              label="Correo Electronico"
              name="email"
              type="email"
              isError={touched.email && errors.email}
            />
            <Input
              label="Telefono"
              name="phone"
              type="tel"
              isError={touched.phone && errors.phone}
            />
            <TextAreaInput
              label="Mensaje"
              name="message"
              isError={touched.message && errors.message}
            />
            <Submit>{isLoading ? "Cargando..." : "Enviar"}</Submit>
          </Form>
        )}
      </Formik>
    </FormBox>
  );
}
export default FormTurnFormikComponents;
