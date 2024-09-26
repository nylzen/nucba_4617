import ScrollReveal from "scrollreveal";
const discoverSection = document.querySelector("#discover");
const infoSection = document.querySelector("#info");
const heroSection = document.querySelector("#hero");
const productsSection = document.querySelector("#products");


const revealSection = (section) => {
  ScrollReveal().reveal(section, {
    delay: 200,
    distance: "500px",
    duration: 1000,
    origin: 'bottom',
    reset: true,
  });
};

export const scrollEffectInit = () => {
  revealSection(discoverSection);
  revealSection(infoSection);
  revealSection(heroSection);
  revealSection(productsSection);
};
