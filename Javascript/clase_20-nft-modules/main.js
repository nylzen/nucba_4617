import { cartInit } from "./assets/cart/cart";
import { menuInterfaceInit } from "./assets/menu-interface/menu-interface";
import { productsSectionInit } from "./assets/products-section/products-section";
import { typewriterInit } from "./assets/typewriter/typewriter";
import { scrollEffectInit } from "./assets/scroll-effect/scroll-effect";

const init = () => {
  productsSectionInit();
  menuInterfaceInit();
  cartInit();
  typewriterInit()
  // scrollEffectInit()
};

init();
