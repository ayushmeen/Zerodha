import React from "react";

function Hero() {
  return (
    <div className="support-hero">
      <div className="container">
        {/* Top bar */}
        <div className="d-flex justify-content-between align-items-center py-3 text-white">
          <span>Support Portal</span>
          <a href="#" className="text-white text-decoration-underline">
            Track Tickets
          </a>
        </div>

        {/* Main content */}
        <div className="row align-items-center py-5">
          {/* Left Section */}
          <div className="col-12 col-md-7 text-white">
            <h2 className="mb-3">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control support-search mb-3"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            />

            <div className="support-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-5 text-white mt-4 mt-md-0">
            <h5 className="mb-3">Featured</h5>
            <ol className="ps-3">
              <li>
                <a href="#" className="text-white">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
