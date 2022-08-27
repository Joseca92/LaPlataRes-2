const url = "http://localhost:8080/api";

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
  const resp = await fetch(`${url}/usuarios/usuarios`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};