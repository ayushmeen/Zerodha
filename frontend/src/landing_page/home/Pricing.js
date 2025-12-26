import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-lg-6 col-12 mb-4 mb-lg-0">
          <h1 className="fs-2">
            Unbeatable pricing
          </h1>

          <p className="text-muted mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            className="d-inline-flex align-items-center gap-2 mt-2"
            style={{ color: "#387ed1", textDecoration: "none" }}
          >
            See pricing
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right Icons */}
        <div className="col-lg-6 col-12">
          <div className="row text-center gy-4">

            <div className="col-md-4 col-12">
              <img
                src="media/images/pricingEquity.svg"
                alt="Free account opening"
                className="img-fluid mb-2"
                style={{ maxWidth: "80px" }}
              />
              <p className="text-muted small mb-0">
                Free account opening
              </p>
            </div>

            <div className="col-md-4 col-12">
              <img
                src="media/images/pricingEquity.svg"
                alt="Free equity delivery"
                className="img-fluid mb-2"
                style={{ maxWidth: "80px" }}
              />
              <p className="text-muted small mb-0">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-md-4 col-12">
              <img
                src="media/images/other-trades.svg"
                alt="Intraday and F&O"
                className="img-fluid mb-2"
                style={{ maxWidth: "80px" }}
              />
              <p className="text-muted small mb-0">
                Intraday and F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
