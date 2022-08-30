const url = "http://localhost:8080/api";

<<<<<<< HEAD
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
/*
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

//Traer todos los blogs
export const getBlog = async (registro = 0) => {
  const resp = await fetch(`${url}/blogs?desde=${registro}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

//Traer una entrada de blog por su id
export const getBlogById = async (id) => {
  const resp = await fetch(`${url}/blogs/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

export const postBlog = async (datos) => {
  const resp = await fetch(`${url}/blogs`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });

  const data = await resp.json();

  return data;
};

//Buscar blog por título--------------
export const buscarBlog = async (termino) => {
  const resp = await fetch(`${url}/buscarb?search=${termino}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
=======

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

  export const putPedido = async (datos) => {
    const resp = await fetch(`${url}/pedido`, {
      method: "PUT",
      body: JSON.stringify(datos),
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
>>>>>>> b0c33c24c3a4331cbb20c37a23c914fe115403f9
    },
  });
  const data = await resp.json();

  return data;
};

<<<<<<< HEAD
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
// };*/
=======
  
>>>>>>> b0c33c24c3a4331cbb20c37a23c914fe115403f9
