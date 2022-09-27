import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import swal from "sweetalert";
import { deletePedido, putPedido } from "../helpers/fetchApp";
import { getMenuById } from "../helpers/fetchMenu";
import borradoP from "../asset/borradoP.png";

const Post = ({ post, handleChange }) => {
  let envio = "";

  const { uid, usuario, menu, entrega, nPedido, date, estado } = post;

  if (entrega) {
    envio = "Realizado";
  } else {
    envio = "Pendiente";
  }
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    let arreglo = [];
    menu.forEach((m) => {
      getMenuById(m).then((respuesta) => {
        console.log(respuesta);

        arreglo.push(respuesta.menu.nombre, ", ");
        setMenus([...arreglo]);
      });
    });
  }, [uid]);

  const pedidoR = () => {
    putPedido(uid).then((respuesta) => {
      console.log(respuesta.msg);
    });
    swal({ text: "El Pedido ha sido realizado!!", icon: "success", timer: 2000 });
    handleChange();
  };

  const pedidoE = () => {
    swal({
      title: "Eliminar Pedido",
      text: "¿Esta seguro que quiere eliminar este Pedido?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        deletePedido(uid).then((respuesta) => {
          console.log(respuesta.msg);
        });
        swal({
          text: "El Pedido ha sido borrado con exito",
          icon: "success",
          timer: 2000,
        });
        handleChange();

        /* setTimeout(()=>{
          window.location.href = window.location.href;
        },2000); */
      }
    });
  };

  return (
    <tr>
      <th scope="row">{nPedido}</th>
      <td>{usuario.nombre}</td>
      <td>{menus}</td>
      <td>{moment(date).format("LT l")}</td>
      <td>{envio}</td>
      <td>
        <input
          className="form-check-input checkEntrega"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={entrega}
          onClick={pedidoR}
        />
      </td>
      <td className="pedidosI">
        {
          <lord-icon
            src="https://cdn.lordicon.com/qsloqzpf.json"
            trigger="hover"
            onClick={pedidoE}
          ></lord-icon>
        }
      </td>
    </tr>
  ); 
};

export default Post;
