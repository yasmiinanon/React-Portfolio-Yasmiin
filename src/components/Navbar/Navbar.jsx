import "../style.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary customNav back">
        <div className="container-fluid">
          <a className="navbar-brand" id="title"><i className="bi bi-code-slash mx-4"></i>Yasmin Ibrahim</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* dropdown menu below */}
              <NavDropdown title="My Projects" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown-item" href="#action/3.1"><i className="bi bi-code-slash mx-4"></i>First Portfolio (Bootstrap) </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="#action/3.2"><i className="bi bi-code-slash mx-4"></i>5-Day Weather Schedule </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="#action/3.3"><i className="bi bi-code-slash mx-4"></i>Cocktail Guide</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><i className="bi bi-code-slash mx-4"></i>Deen Hub - coming soon!</NavDropdown.Item>
            </NavDropdown>
            {/* dropdown end */}
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
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
