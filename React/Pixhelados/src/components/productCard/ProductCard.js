import React from "react";
import { useNavigate } from "react-router-dom";
import { Window, WindowHeader, WindowContent, Cutout } from "react95";
import Button from "../button/Button";
import { ContainerButton } from "./ProductCardStyles";

export const ProductCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Window style={{ maxWidth: "350px" }}>
        <WindowHeader style={{ textTransform: "capitalize" }}>
          <span role="img" aria-label="Kiwi">
            📍
          </span>
          {props.name}
        </WindowHeader>

        <WindowContent style={{ padding: "0.25rem" }}>
          <Cutout>
            <img
              style={{ width: "100%", height: "1uto", display: "block" }}
              src={props.src}
              alt="kiwi"
            />
          </Cutout>
          <ContainerButton>
            <Button primary onClick={() => navigate(`${props.name}`)}>
              {" "}
              Ver más{" "}
            </Button>
          </ContainerButton>
        </WindowContent>
      </Window>
    </>
  );
};

ProductCard.story = {
  name: "Product",
};
