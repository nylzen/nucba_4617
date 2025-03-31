import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";
import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurn.styles";

function FormTurn() {
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Form>
        <Input label="Nombre" type="text" />
        <Input label="Apellido" type="text" />
        <Input label="Fecha" type="date" />
        <Input label="Edad" type="number" />
        <Input label="Correo Electronico" type="email" />
        <Input label="Telefono" type="tel" />
        <TextAreaInput label="¿Cómo escuchaste de nosotros?" />
        <Submit />
      </Form>
    </FormBox>
  );
}
export default FormTurn;
