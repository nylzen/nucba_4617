import { Categories } from "./components/categories/categories";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Products } from "./components/products/products";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
