
const url = "https://restaurantelp.herokuapp.com/api"


export const validarToken = async () => {
  const resp = await fetch(`${url}/usuarios`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': JSON.parse(localStorage.getItem('token')),
    },
  });
  const data = await resp.json();

  return data;
};


export const postUsuario = async datos => {
  const resp = await fetch(`${url}/usuarios`, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      
    },
  });

  const data = await resp.json();

  return data;
};


export const postAuth = async datos => {
  const resp = await fetch(`${url}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await resp.json();

  return data;
};


export const postPedido = async datos => {
  const resp = await fetch(`${url}/pedido`, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

export const getPedido = async (registro = 0) => {
    const resp = await fetch(`${url}/pedido?desde=${registro}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
         "x-token": JSON.parse(localStorage.getItem("token")), 
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
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    });
  
    const data = await resp.json();
  
    return data;
  };
  
  export const deletePedido = async (id) => {
    const resp = await fetch(`${url}/pedido/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    });
  
    const data = await resp.json();
  
    return data;
  };

  
export const buscarPedido = async (termino, terminoP) => {
  const resp = await fetch(`${url}/buscarp?search=${termino}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};




 
