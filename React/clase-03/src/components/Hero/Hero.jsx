import "./Hero.css";
//  jsx = js + xml
const heroInfo = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "10px",
};

const validTitle = {
  color: "green",
  fontFamily: "sans-serif",
};

const errorTitle = {
  color: "red",
  fontFamily: "sans-serif",
};

export const Hero = () => {
  const isValid = true;

  return (
    <section className="hero" style={{ backgroundColor: "rgba(0,0,0,0.2" }}>
      <div className="hero-info" style={heroInfo}>
        <h1 style={isValid ? validTitle : errorTitle}>Hola</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          deserunt eaque autem ipsa illo voluptatibus beatae assumenda doloribus
          aut totam!
        </p>
        <a href="#" className="btn">
          Comprar ahora
        </a>
      </div>
      <img
        src="https://pbs.twimg.com/media/Gb0y5sOWcAIVcI1?format=jpg&name=large"
        alt=""
      />
    </section>
  );
};
