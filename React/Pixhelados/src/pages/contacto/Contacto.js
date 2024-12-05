import React from "react";
import Panel from "../../components/panel/Panel";
import FieldSet from "../../components/fieldSet/FieldSet";
import Button from "../../components/button/Button";

import {
  ContactFormStyled,
  ContactSectionStyled,
  ContactTitleStyled,
} from "./ContactoStyles";

function Contacto() {
  return (
    <ContactSectionStyled>
      <ContactTitleStyled>
        {"Escribinos un mensaje perri :)"}
      </ContactTitleStyled>
      <Panel>
        <ContactFormStyled>
          <FieldSet
            type="text"
            placeholder="Escribí tu nombre..."
            id="name"
            name="name"
            label="Nombre"
          />

          <FieldSet
            type="email"
            placeholder="Escribí tu email..."
            id="email"
            name="email"
            label="Email"
            error="Este campo es requerido"
          />

          <FieldSet
            type="textarea"
            placeholder="Escribí tu mensaje..."
            id="message"
            name="message"
            label="Mensaje"
          />

          <Button primary type="submit" onClick={(e) => e.preventDefault()}>
            Enviar!
          </Button>
        </ContactFormStyled>
      </Panel>
    </ContactSectionStyled>
  );
}

export default Contacto;
