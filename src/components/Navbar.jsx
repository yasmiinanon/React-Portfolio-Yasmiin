import "./style.css";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary customNav back">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/home" id="title"><i className="bi bi-code-slash mx-4"></i> Yasmin Ibrahim </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* DROPDOWN START below
              <NavDropdown title="My Projects" id="basic-nav-dropdown">
                <NavDropdown.Item className="dropdown-item" href="/first-portfolio"><i className="bi bi-code-slash mx-4"></i>First Portfolio (Bootstrap) </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="/weather-schedule"><i className="bi bi-code-slash mx-4"></i>5-Day Weather Schedule </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="/cocktail-guide"><i className="bi bi-code-slash mx-4"></i>Cocktail Guide</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"><i className="bi bi-code-slash mx-4"></i>Deen Hub - coming soon!</NavDropdown.Item>
              </NavDropdown>
              DROPDOWN END */}

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
                  href="https://drive.google.com/file/d/1OWqmgGyc8jxAHTfx_i8uYuGAUWjSSlmg/view" target="_blank"
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