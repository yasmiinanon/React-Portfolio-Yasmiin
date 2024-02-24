import "../style.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary customNav back">
      <div className="container-fluid">
        <a className="navbar-brand" id="title"><i className="bi bi-code-slash mx-4"></i>Yasmin
          Ibrahim</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Projects
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#Horiseon"><i className="bi bi-code-slash mx-4"></i>Horiseon</a></li>
                <li><a className="dropdown-item" href="#Portfolio"><i className="bi bi-code-slash mx-4"></i>Portfolio (HTML/CSS)</a></li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li><a className="dropdown-item" href="./deenHub.html"><i className="bi bi-code-slash mx-4"></i>Deen Hub - coming soon!</a></li>
              </ul>
            </li>
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
  );
}

export default Navbar;
