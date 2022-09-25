const url = "http://localhost:8080/api";

//usuarios

export const getUsuarios = async (registro = 0) => {
  const resp = await fetch(`${url}/usuarios?desde=${registro}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
     "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

export const getUsuarioById = async (id) => {
  const resp = await fetch(`${url}/usuarios/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")), 
    },
  });
  const data = await resp.json();

  return data;
};

export const putUsuarios = async (datos,id) => {
  const resp = await fetch(`${url}/usuarios/${id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

export const deleteUsuario = async (id) => {
  const resp = await fetch(`${url}/usuarios/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  

  const data = await resp.json();

  return data;
};

//roles
export const getRoles = async () => {
  const resp = await fetch(`${url}/roles`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
     /*  "x-token": JSON.parse(localStorage.getItem("token")), */
    },
  });
  const data = await resp.json();

  return data;
};
export const buscarUsuario = async (termino) => {
  const resp = await fetch(`${url}/buscaru?search=${termino}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")), 
    },
  });
  const data = await resp.json();

  return data;
};

export const traerUsuario = async () => {
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
