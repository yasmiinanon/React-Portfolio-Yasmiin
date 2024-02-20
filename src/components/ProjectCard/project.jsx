import "./project.css";

function ProjectCard(props) {
  return (
    <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
      <div className="card">
        <img alt={props.name} src={props.image} className="card-img-top" id={props.name}></img>
          <div className="card-body">
            <h3 className="card-title fw-bolder">{props.name}</h3>
            <br />
              <h5 className="card-text">{props.description}</h5>
              <a href={props.link} className="btn btn-primary btn-lg"
                target="_blank"><i className="bi bi-code-slash mx-2"></i>{props.buttonText}</a>
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
