/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-lg-6 col-12 p-lg-4 mb-4 mb-lg-0">
          <h2 className="mb-4">Trust with confidence</h2>

          <div className="mb-4">
            <h5>Customer-first always</h5>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
              of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h5>No spam or gimmicks</h5>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h5>The Zerodha universe</h5>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h5>Do better with money</h5>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with
              your money.
            </p>
          </div>
        </div>

        {/* Right Image + Links */}
        <div className="col-lg-6 col-12 text-center p-lg-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a
              href="#"
              className="d-inline-flex align-items-center gap-2"
              style={{ color: "#387ed1", textDecoration: "none" }}
            >
              Explore our products
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href="#"
              className="d-inline-flex align-items-center gap-2"
              style={{ color: "#387ed1", textDecoration: "none" }}
            >
              Try Kite demo
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
