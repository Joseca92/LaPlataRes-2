import React from "react";
import notfound from "../asset/img/notfound.jpg";
import "../css/error.css";

const Error404 = () => {
  return (
    <div className="container-fluid boxContainer bg-secondary d-flex justify-content-center align-items-center">
      <div className="row  d-flex justify-content-center">
        <div className="col-12 error">
            <img className="rounded mx-auto d-block" src={notfound} />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5">
          <button className="btnGral fw-bold p-2 m-2" to="/login">Volver</button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
