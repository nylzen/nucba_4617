export const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div key={product.id} className="card">
      <h2>{product.name}</h2>
      <p>
        {product.price.toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </p>
      <p>Stock: {product.stock === 0 ? "No hay stock" : product.stock}</p>
      <button>Comprar</button>
    </div>
  );
};
