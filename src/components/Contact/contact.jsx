import "../style.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-light">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h3 className="text-uppercase m-0 fw-bolder">Address</h3>
                <hr className="my-4" />
                <div className="text-light">London, United Kingdom </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-light">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h3 className="text-uppercase m-0 fw-bolder">Email</h3>
                <hr className="my-4" />
                <div>
                  <a className="text-light" href="mailto:yasmin.a.ibrahim@icloud.com">yasmin.project@icloud.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-light">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h3 className="text-uppercase m-0 fw-bolder text-light">Phone</h3>
                <hr className="my-4" />
                <a className="text-light" href="077 1234 5678">077 1234 5678</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;