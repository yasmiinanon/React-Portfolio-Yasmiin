import "../style.css";

function Skills() {
return (
    <div className="container-fluid content section">
      <h2 className="sectionHeading fw-bold" id="skills">Web-development skills</h2>
      <div className="row myProjects">

        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '100%' }} aria-valuenow="90%" aria-valuemin="0"
              aria-valuemax="100">100%</div>
          </div>
          <li className="list-group-item">CSS</li>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '95%' }} aria-valuenow="85%" aria-valuemin="0"
              aria-valuemax="100">95%</div>
          </div>
          <li className="list-group-item">Bootstrap</li>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow="50%" aria-valuemin="0"
              aria-valuemax="100">90%</div>
          </div>
          <li className="list-group-item">Javascript</li>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '70%' }} aria-valuenow="15%" aria-valuemin="0"
              aria-valuemax="100">70%</div>
          </div>
          <li className="list-group-item">React</li>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '40%' }} aria-valuenow="0%" aria-valuemin="0"
              aria-valuemax="100">40%</div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Skills;