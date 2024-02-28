import "./style.css";

function Jumbotron() {
  return (
    <div className="p-5 bg-body-tertiary ldnBackground background-tint">
      <div className="container-fluid py-5 jumboCopy">
        <h1 className="display-5 fw-bold">A little about me...</h1>
        <div className="d-flex col">
          <img className="img-fluid rounded mb-3" src="./images/avatar.jpg" alt="image of a woman posing at the top of a mountain edge"></img>
          <p className="fs-4 fw-normal">I'm a Data Analyst in the healthcare field by day. By night, I
            study front-end web development as an exciting first step toward my next career pivot.
            <br />
            <br />
            I have recently made a hobby of taking a Santander bike through a different part of London at least one day each week (which was a lot easier to do when the weather was better!). I am also on a challenge to read one book a month this year to hopefully return to my childhood habit of reading!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;