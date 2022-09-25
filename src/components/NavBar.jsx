import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import '../css/navP.css'
import Cart from './Cart'
import Logo from './Logo'

const Nav = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;
  useEffect(()=>{
    const datos = JSON.parse(localStorage.getItem("user"))
    setUser(datos);
  },[])
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
          {/* <img src={logo} alt="logo la plata restaurante" width="64" height="64" className="d-inline-block align-text-top" /> */}
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
            {
            user?.role === "ADMIN_ROLE" && (
              <ul className="navbar-nav">
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toogle" id="dropdown-basic" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-user-circle-o" aria-hidden="true" /> Administración
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item"to="/menu">
                    Menús 
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item"to="/pedido">
                     Pedidos 
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item"to="/usuarios">
                     Usuarios
                  </Link>
                </li>
              </ul>
              </li>
            </ul>
                )}
            {/* dropdown */}
          <ul className="navbar-nav">
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toogle" id="dropdown-basic" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-user-circle-o" aria-hidden="true" /> Hola {user?.nombre}
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="#" onClick={logout}>
                    Cerrar sesión
                  </Link>
                </li>
              </ul>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav