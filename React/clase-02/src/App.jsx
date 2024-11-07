
// import { UserList } from "./components/UserList";
// import { users } from "./data/users";

import { Products } from "./components/Products/Products";

// import { BlogPost } from "./components/BlogPost";
// import Ejemplo from "./components/Ejemplo";
// import { Login } from "./components/Login";
// import { UserReact } from "./components/UserReact";

// Reglas jsx:
/*
- Devuelve un unico elemento
- class pasa a ser className
- las etiquetas tienen que cerrar todas. <img/> / <input/>
*/
export const App = () => {
  // const isLogged = true;
  return (
    <>
      {/* <UserReact />
      <hr />
      <Ejemplo nombre="Messi" />
      <Ejemplo nombre="Cristiano" />
      <Ejemplo nombre="Nico" />
      <Ejemplo nombre="Eze" /> */}

      {/* {!isLogged ? <h1>Logueate</h1> : <h1>Hola Messi</h1>} */}

      {/* <BlogPost
        title="Post 1"
        description="Posteo numero 1"
        post="..."
        author="Messi"
      />
      <BlogPost
        title="Post 2"
        description="Posteo numero 2"
        post="..."
        author="Nelson"
      /> */}
      {/* {isLogged && <h1>Hola</h1>} */}
      {/* {!isLogged ? <Login /> : <h1> Estas logueado</h1>} */}
      {/* <UserList users={users}/> */}
      <Products/>

    </>

  );
};
