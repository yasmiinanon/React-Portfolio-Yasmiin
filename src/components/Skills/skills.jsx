import "./skills.css";

function Skills() {
return (
    <div className="container-fluid content section">
      <h2 className="sectionHeading fw-bold" id="skills">Skills</h2>
      <div className="row myProjects">

        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90%" aria-valuemin="0"
              aria-valuemax="100">90%</div>
          </div>
          <li className="list-group-item">CSS</li>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85%" aria-valuemin="0"
              aria-valuemax="100">85%</div>
          </div>
          <li className="list-group-item">Bootstrap</li>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50%" aria-valuemin="0"
              aria-valuemax="100">50%</div>
          </div>
          <li className="list-group-item">Javascript</li>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow="15%" aria-valuemin="0"
              aria-valuemax="100">15%</div>
          </div>
          <li className="list-group-item">React</li>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0%" aria-valuemin="0"
              aria-valuemax="100">0%</div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Skills;