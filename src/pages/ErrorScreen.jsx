import React from "react";
import notfound from "../asset/img/notfound.jpg";
import "../css/error.css";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <div className="container-fluid boxContainer bg-secondary d-flex justify-content-center align-items-center">
      <div className="row  d-flex justify-content-center">
        <div className="col-12 error">
            <img className="rounded mx-auto d-block" src={notfound} />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5">
          <Link className="btnGral fw-bold p-2 m-2" to="/Home" >Volver</Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
