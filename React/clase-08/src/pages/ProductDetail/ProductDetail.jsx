import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { productList } from "../../data/productsData";
import { Navigate } from "react-router-dom";

export const ProductDetail = () => {
  const { product } = useParams();
  const location = useLocation();

  if (!location.state) {
    return <Navigate to="/404" />;
  }

  const cup = productList.find((p) => p.id === location.state.algo);

  return (
    <div>
      <h2>Seccion de: {product}</h2>
      <img src={cup.src} alt="" style={{ width: "50%" }} />
      <p>{cup.year}</p>
    </div>
  );
};
