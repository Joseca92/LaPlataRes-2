import React from 'react'
import '../css/homeScreen.css'
import logo from '../asset/logo.png'
const HomeScreen = () => {
  return (
  <div className="bgPresentation">
    <div className="container-fluid m-0 p-0 fondo">
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
  )
}

export default HomeScreen