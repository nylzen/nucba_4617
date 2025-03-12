import React from "react";

const styles = {
  card: {
    padding: "20px",
    border: "1px solid black",
    borderRadius: "10px",
    width: "300px",
  },
};

export const Card = (props) => {
  const { title, description } = props;
  return (
    <div style={styles.card}>
      {/* <img src="https://placehold.co/150" alt="Imagen de prueba" /> */}
      {/* {user && <h1>{user}</h1>} */}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
