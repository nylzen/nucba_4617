import { useEffect } from "react";
import { productList } from "../../data/productsData";
import { Card, LinkItem, ProductContainer, Title } from "./styles";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const isAuth = true;

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) navigate("/about");
  }, [isAuth, navigate]);
  return (
    <>
      <Title>Esto es boca?</Title>
      <ProductContainer>
        {productList.map((product) => (
          <Card key={product.id}>
            <img src={product.src} alt="" />
            <h2>{product.name}</h2>
            <span>{product.year}</span>
            <LinkItem to={product.name} state={{ algo: product.id }}>
              Ver mas
            </LinkItem>
          </Card>
        ))}
      </ProductContainer>
    </>
  );
};
