import React, { useEffect, useState } from "react";
import { getCategoria, putMenu, deleteMenu } from "../helpers/fetchMenu";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const MenuCard = ({ post, handleChange }) => {
  const { _id, precio, nombre, img, detalle, estado } = post;

  const [state, setState] = useState({ abierto: false });
  const [fEstado, setFEstado] = useState(estado);
  const [fNombre, setFNombre] = useState(nombre);
  const [fPrecio, setFPrecio] = useState(precio);
  const [fImg, setFImg] = useState(img);
  const [fDetalle, setFDetalle] = useState(detalle);
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);

  const modificarM = () => {
    setState({ abierto: !state.abierto });
  };
  useEffect(() => {
    getCategoria().then((respuesta) => {
      setCategorias(respuesta.categoria);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      nombre: fNombre,
      detalle: fDetalle,
      estado: fEstado,
      precio: fPrecio,
      categoria: categoria,
    };
    if (
      datos.nombre == "" ||
      datos.detalle == "" ||
      datos.estado == "" ||
      datos.precio == "" ||
      datos.categoria == ""
    ) {
      swal({ text: "Los campos no deben estar vacio", icon: "error" });
    } else {
      swal({
        title: "Modificar usuario",
        text: "¿Esta seguro que quiere modificar el menú?",
        icon: "warning",
        buttons: ["No", "Si"],
      }).then((respuesta) => {
        console.log(respuesta);
        if (respuesta) {
          putMenu(datos, _id).then((respuesta) => {
            console.log(respuesta.errors);
            console.log(datos);
          });
          swal({
            text: "El Menú a sido modificado con exito",
            icon: "success",
            timer: 3000,
          });

          modificarM();

          setTimeout(() => {
            handleChange();
            /* window.location.href = window.location.href; */
          }, 4000);
        }
        if (respuesta == null) {
          modificarM();
        }
      });
    }
  };

  const menuE = () => {
    swal({
      title: "Eliminar menú",
      text: "¿Esta seguro que quiere eliminar el menú?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      console.log(respuesta);
      if (respuesta) {
        deleteMenu(_id).then((respuesta) => {
          console.log(respuesta.msg);
        });
        swal({
          text: "El Menú a sido borrado con exito",
          icon: "success",
          timer: 2000,
        });
        setTimeout(() => {
          handleChange();
          /* window.location.href = window.location.href; */
        }, 3000);
      }
    });
  };

  return (
    <>
      <div className="card shadow mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{detalle}</p>
              <h5 className="card-title">$ {precio}</h5>
              <div className="row">
                <div className="col-6 btnMod">
                <lord-icon
                  title="Modificar Menú"
                  src="https://cdn.lordicon.com/btnwcdpq.json"
                  trigger="hover"
                  onClick={modificarM}
                ></lord-icon>
                </div>
                <div className="col-6 btnElim">
                <lord-icon
                  title="Eliminar Menú"
                  src="https://cdn.lordicon.com/qsloqzpf.json"
                  trigger="hover"
                  onClick={menuE}
                ></lord-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-12 cards">

                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{detalle}</p>
                        <p className="card-text"> $ {precio}</p>
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
                <div className="col-md-4 d-flex flex-row just" id='botones'>
                  <div className="btnMod">
                    <lord-icon
                      title="Modificar Menú"
                        src="https://cdn.lordicon.com/btnwcdpq.json"
                        trigger="hover"
                        onClick={modificarM}>
                      </lord-icon>
                  </div>           
                  <div className="btnElim">
                    <lord-icon
                          title="Eliminar Menú"
                          src="https://cdn.lordicon.com/qsloqzpf.json"
                          trigger="hover"
                          onClick={menuE}>
                      </lord-icon>
                  </div>
                      
                      
                    </div>
      </div> */}

      <Modal isOpen={state.abierto}>
        <ModalHeader>Modificar Datos</ModalHeader>

        <ModalBody>
          <div class="container">
            <div class="row">
              <form onSubmit={handleSubmit}>
                <div class="col">
                  <FormGroup>
                    <Label for="nombre">Nombre</Label>
                    <Input
                      type="text"
                      id="nombre"
                      value={fNombre}
                      onChange={(e) => setFNombre(e.target.value)}
                    />
                  </FormGroup>
                </div>
                <div class="col">
                  <FormGroup>
                    <Label for="descripcion">Descripcion</Label>
                    <textarea
                      id="desc"
                      className="form-control"
                      required
                      value={fDetalle}
                      onChange={(e) => setFDetalle(e.target.value)}
                    ></textarea>
                  </FormGroup>
                  <FormGroup>
                    <Label for="imagen">Imagen</Label>
                    <input
                      id="imagen"
                      className="form-control"
                      type="text"
                      placeholder="Ingrese una url"
                      value={fImg}
                      onChange={(e) => setFImg(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="estado">Estado</Label>
                    <select
                      id="estado"
                      className="form-select"
                      aria-label="default select example"
                      value={fEstado}
                      onChange={(e) => setFEstado(e.target.value)}
                    >
                      <option value="">Seleccione</option>
                      <option value="true">Disponible</option>
                      <option value="false">No disponible</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <Label for="categoria">Categoria</Label>
                    <select
                      id="categoria"
                      className="form-select"
                      aria-label="default select example"
                      onChange={(e) => setCategoria(e.target.value)}
                      value={categoria}
                    >
                      <option value="">Seleccione</option>
                      {categorias.map((category) => (
                        <option key={category._id} value={category.categoria}>
                          {category.categoria}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <Label for="precio">Precio</Label>
                    <input
                      id="precio"
                      className="form-control"
                      type="number"
                      required
                      value={fPrecio}
                      onChange={(e) => setFPrecio(e.target.value)}
                    />
                  </FormGroup>
                  <ModalFooter>
                    <Button color="dark">Modificar</Button>
                    <Button color="secondary" onClick={modificarM}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default MenuCard;
