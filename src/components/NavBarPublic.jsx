import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getUsuarioById} from "../helpers/fetchUsuario";
import '../css/navP.css'
import Logo from './Logo'

const NavBarPublic = () => {
  const navigate = useNavigate()
 
  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login")
    }, 1000);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black"  >
      <div className="container navP">
        <Link className="navbar-brand d-flex align-items-center text-white" to="/">
          <Logo/>
          <h4>La Plata restaurante</h4>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse offset-lg-5 offset-md-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li>
            <NavLink className="nav-link active" aria-current="page" to="/login"><button className='btn btn-secondary'>
               Iniciar Sesion </button> </NavLink>
            </li>
              
           
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBarPublic