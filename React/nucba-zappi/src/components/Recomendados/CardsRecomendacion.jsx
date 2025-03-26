import CardRecomendacion from "./CardRecomendacion";
import { CardsContainer } from "./CardsRecomendacionStyled";
// import { recommended } from "../../mock/recommended";
import { useSelector } from "react-redux";

const CardsRecomendacion = () => {
  const { recommended } = useSelector((state) => state.recommended);

  // ME TRAIGO EL VALOR DEL SETTINGS DEL USER PARA CUANTAS
  return (
    <CardsContainer gridLength={4} messi={4}>
      {recommended.map((recomendado) => (
        <CardRecomendacion key={recomendado.id} {...recomendado} />
        // <CardRecomendacion
        //   key={recomendado.id}
        //   title={recomendado.title}
        //   img={recomendado.img}
        //   desc={recomendado.desc}
        //   price={recomendado.price}
        // />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
