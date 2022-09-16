import React from 'react'

const MenuCard = ({precio, nombre, img, detalle} /*{menu}*/) => {
  return (
   
      <div className="col-12 cards">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{detalle}</p>
                        <p className="card-text">{precio}</p>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
  )
}

export default MenuCard