import React from 'react'
import '../css/homeScreen.css'
import logo from '../asset/logo.png'
const HomeScreen = () => {
  return (
    <>
      <div className="bgPresentation">
        <div className="container-fluid m-0 p-0 fondo1">
          <div className='row text-center text-white p-5 mx-5'>
            <div className="col-12 logoBox">
              <img src={logo} alt="Logo" className='logo' />
            </div>
            <div className=" col-12">
              <h2 className='fw-bold'> LA PLATA RESTAURANTE</h2>
            </div>
            <div className=" col-12 mt-5">
              <h4 className='fw-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error dignissimos quibusdam doloribus tenetur et unde, alias ad quam possimus qui culpa praesentium perferendis commodi! Quod at quam atque laudantium.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  d-flex justify-content-center">
          <div className="col-12 buscador mt-5 d-flex aling-items-center justify-content-center">
            <input type="text" className='fs-5 p-2' placeholder='Buscar...' />
            <button className='btnGral fw-bold p-2 mx-2'>Buscar</button>
          </div>
          <div className="col-12 mt-5 categoria"></div>
          <div className="row menu border border-dark border-2 p-3 my-5 d-flex justify-content-center">
            <div className="col-12 cards">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="#" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='btnGral fw-bold p-2 mx-2'>Ver pedido : $</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
