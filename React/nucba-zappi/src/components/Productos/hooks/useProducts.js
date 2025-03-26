import { useSelector } from "react-redux";

export const useProducts = () => {
  const { productsMock } = useSelector((state) => state.products);

  // const [products, setProducts] = useState([]);
  // const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const res = await fetch("https://mibacked.com/api/products");
  //   const data = await res.json();
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  //   dispatch(getProducts(data));
  // }, []);

  return { products: productsMock };
};
