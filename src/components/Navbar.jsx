import "./style.css";
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary customNav back">
        <div className="container-fluid">
        <Link className="navbar-brand" to="" id="title"><i className="bi bi-code-slash mx-4"></i> Yasmin Ibrahim </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects"> My Projects </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary btn-md navCTA"
                  href="https://drive.google.com/file/d/12Ld-84XL999kjS2C-B15ztSaUoMrrMXh/view?usp=sharing" target="_blank"
                  role="button"><i className="bi bi-file-earmark-person-fill"></i> My Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;