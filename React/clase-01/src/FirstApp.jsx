import { Otro } from "./Otro";

export function FirstApp() {
  // document.createElement('h1', null, `holis!!!`)
  const nombre = "Joel";
  return (
    <>
      <h1>Holis!!!!</h1>
      <Otro titulo="Soy el titulo 1" />
      <Otro titulo="Soy otro titulo" />
      <Otro titulo={nombre} />
      <Otro titulo='asd' />
    </>
  );
}
