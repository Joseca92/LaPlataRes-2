import React from "react";

const BtnPaginacion = ({ registro, total, prevPage, nextPage }) => {
  return (
    <div className="d-flex justify-content-center my-3 gap-3">
      <button
        className="btn btn-primary"
        disabled={registro === 0 && true}
        onClick={prevPage}
      >
        prev
      </button>
      <button
        className="btn btn-primary"
        disabled={total - registro <= 5 && true}
        onClick={nextPage}
      >
        next
      </button>
    </div>
  );
};

export default BtnPaginacion;
