import { BorderDecoration, CardCategoria } from "./CategoriasStyles";

export const Categoria = () => {
  return (
    <CardCategoria
      selected={false}
      onClick={(e) => e.preventDefault()}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648466/coding/NucbaZappi/Categorias/hamburguesa_faykp7.png"
        alt="Hamburguesas"
      />
      <h2>Hamburguesas</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
