// import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Products } from "./components/Products/Products";
import { TestMaterial } from "./components/TestMaterial/TestMaterial";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About/> */}
      <Products />
      <TestMaterial />
      <GlobalStyles />
    </>
  );
};

export default App;
