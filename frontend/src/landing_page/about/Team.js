import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container border-top">
      <h1 className="fs-2 text-center mt-5">People</h1>

      <div className="row align-items-center mt-4 mb-5">
        {/* Image + Name */}
        <div className="col-12 col-md-4 text-center text-muted mb-4 mb-md-0 px-3 px-md-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle img-fluid mb-3"
            style={{ maxWidth: "180px" }}
          />
          <h3 className="fs-5 mt-2">Nithin Kamath</h3>
          <p className="mb-0">Founder, CEO</p>
        </div>

        {/* Description */}
        <div className="col-12 col-md-8 text-muted px-3 px-md-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <Link to="/" className="text-decoration-none">
              HomePage
            </Link>{" "}
            /{" "}
            <Link to="/" className="text-decoration-none">
              TradingQnA
            </Link>{" "}
            /{" "}
            <Link to="/" className="text-decoration-none">
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
