import "../style.css";
import React from 'react';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-light">
              <div className="card-body text-center">
              <i className="bi bi-map h1" style={
                  {
                    color: "white",
                    borderColor: "white"
                  }}></i>
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h3 className="text-uppercase m-0 fw-bolder mt-3 mb-2">Address</h3>
                <hr className="my-4" />
                <div className="text-light h5 mt-2">London, United Kingdom </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-light">
              <div className="card-body text-center">
                <i className="bi bi-envelope h1" style={
                  {
                    color: "white",
                    borderColor: "white"
                  }}></i>
                <h3 className="text-uppercase m-0 fw-bolder mt-3 mb-2">Email</h3>
                <hr className="my-4" />
                <div>
                  <a className="text-light h5 mt-2" href="mailto:yasmin.a.ibrahim@icloud.com">yasmiinanon@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100 bg-light">
              <div className="card-body text-center">
                <i className="bi bi-telephone h1" style={
                  {
                    color: "white",
                    borderColor: "white"
                  }}></i>
                <h3 className="text-uppercase m-0 fw-bolder text-light mt-3 mb-2">Phone</h3>
                <hr className="my-4" />
                <a className="text-light h5 mt-2" href="077 1234 5678">0737 5257 154</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;