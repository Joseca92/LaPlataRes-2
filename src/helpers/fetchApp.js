const url = "http://localhost:8080/api";
//REgistrar un usuario
export const validarToken = async () => {
  const resp = await fetch(`${url}/usuarios/validar`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};
//Login de usuario
export const postAuth = async (datos) => {
  const resp = await fetch(`${url}/auth/login`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();

  return data;
};

//traer menu
export const getMenu = async () => {
  const resp = await fetch(`${url}/menu`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      //"x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

//Crear nuevo menu
export const postMenu = async (datos) => {
  const resp = await fetch(`${url}/menu`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

export const getCategoria = async () => {
  const resp = await fetch(`${url}/categoria`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
     
    },
  });
  const data = await resp.json();

  return data;
}
export const getPedido = async (registro = 0) => {
    const resp = await fetch(`${url}/pedido?desde=${registro}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
       /*  "x-token": JSON.parse(localStorage.getItem("token")), */
      },
    });
    const data = await resp.json();
  
    return data;
  };

  export const putPedido = async (id) => {
    const resp = await fetch(`${url}/pedido/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
    const data = await resp.json();
  
    return data;
  };

  //Traer una entrada de menu por su id
export const getMenuById = async (id) => {
  const resp = await fetch(`${url}/menu/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      /* "x-token": JSON.parse(localStorage.getItem("token")), */
    },
  });
  const data = await resp.json();

  return data;
};


//-------------------------------------------------------------------------------
// export const getPosts = async () => {
//   const resp = await fetch("http://localhost:8080/posts");
//   const data = await resp.json();

//   return data;
// };

// export const getPostById = async (id) => {
//   const resp = await fetch(`http://localhost:8080/posts/${id}`);
//   const data = await resp.json();

//   return data;
// };

// export const addPost = async (datos) => {
//   const resp = await fetch("http://localhost:8080/posts", {
//     method: "POST",
//     body: JSON.stringify(datos),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   const data = await resp.json();

//   return data;
// };
