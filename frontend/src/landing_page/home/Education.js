import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-6 col-12">
          <h1 className="fs-2">
            Free and open market education
          </h1>

          <p className="text-muted mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="d-inline-flex align-items-center gap-2 mt-2"
            style={{ color: "#387ed1", textDecoration: "none" }}
          >
            Varsity
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a
            href="#"
            className="d-inline-flex align-items-center gap-2 mt-2"
            style={{ color: "#387ed1", textDecoration: "none" }}
          >
            TradingQ&amp;A
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
