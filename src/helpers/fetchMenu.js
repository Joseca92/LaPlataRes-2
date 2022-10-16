//const url = "http://localhost:8080/api";
const url = "https://restaurantelp.herokuapp.com/api";
//traer menu
export const getMenu = async () => {
    const resp = await fetch(`${url}/menu`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
       
      },
    });
    const data = await resp.json();
  
    return data;
  };
  
  //Crear nuevo menu
  export const postMenu = async (datos) => {
    const resp = await fetch(`${url}/menu`, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': JSON.parse(localStorage.getItem('token')),
      },
    });
    const data = await resp.json();
    return data;
  };
  
  export const getCategoria = async () => {
    const resp = await fetch(`${url}/categoria`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
       
      },
    });
    const data = await resp.json();
  
    return data;
  }
   //Traer una entrada de menu por su id
export const getMenuById = async (id) => {
    const resp = await fetch(`${url}/menu/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")), 
      },
    });
    const data = await resp.json();
  
    return data;
  };
  //modificar menu
  export const putMenu = async (datos,id) => {
    const resp = await fetch(`${url}/menu/${id}`, {
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
  
  //borrar menu de la lista
  export const deleteMenu = async (id) => {
    const resp = await fetch(`${url}/menu/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    });
    const data = await resp.json();
  
    return data;
  };

  //Search menu
  export const buscarMenu = async (termino) => {
    const resp = await fetch(`${url}/buscarm?search=${termino}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")), 
      },
    });
    const data = await resp.json();
  
    return data;
  };
