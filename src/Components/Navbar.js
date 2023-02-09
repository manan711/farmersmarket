import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
  } from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><li>
            <Link to="/">Home</Link>
          </li>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><li>
            <Link to="/login">Login</Link>
          </li></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><li>
            <Link to="/register">Register</Link>
          </li></a>
        </li>
        </ul>
        </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar