import React from 'react'

const menuCard = ({menus}) => {
  return (
    <>
    {menus.map((menu)=>(
      <div className="col-12 cards" key={menu.id}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={menu.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{menu.nombre}</h5>
                        <p className="card-text">{menu.detalle}</p>
                        <p className="card-text">{menu.precio}</p>
                      </div>
                    </div>
                  </div>
                </div>
      </div>

    ))}
    </>
  )
}

export default menuCard