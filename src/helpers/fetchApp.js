const url = "http://localhost:8080/api";


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

  