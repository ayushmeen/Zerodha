import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row text-center justify-content-center">

        {/* Hero Image */}
        <div className="col-12">
          <img
            src="media/images/landing.svg"
            alt="Hero"
            className="img-fluid mb-5"
            style={{ maxWidth: "600px" }}
          />
        </div>

        {/* Heading */}
        <div className="col-lg-8 col-md-10 col-12">
          <h1 className="fw-semibold">
            Invest in everything
          </h1>

          <p className="mt-2 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          {/* CTA Button */}
          <button
            className="btn btn-primary px-4 py-2 mt-3"
            type="button"
          >
            Sign up for free
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
