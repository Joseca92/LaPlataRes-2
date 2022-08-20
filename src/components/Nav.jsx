import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../asset/logo.png'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="logo la plata restaurante" width="64" height="64" className="d-inline-block align-text-top" />
          <h4>La Plata restaurante</h4>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Hola Usuario</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav