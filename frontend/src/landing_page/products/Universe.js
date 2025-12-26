import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5 text-center">
      <h2 className="p-3">The Zerodha Universe</h2>
      <p className="p-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col-12 col-md-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="img-fluid"
            style={{ width: "80%" }}
          />
          <p
            className="text-muted text-center pt-3"
            style={{ fontSize: "0.8rem" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
          <img
            src="media/images/streak-logo.png"
            className="img-fluid mt-5"
            style={{ width: "80%" }}
          />
          <p
            className="text-muted text-center pt-3"
            style={{ fontSize: "0.8rem" }}
          >
            Systematic trading platform
            <br />
            that allows you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img
            src="media/images/sensibull-logo.svg"
            className="img-fluid"
            style={{ width: "80%", paddingTop: "14px" }}
          />
          <p
            className="text-muted text-center pt-4"
            style={{ fontSize: "0.8rem" }}
          >
            Options trading platform that lets you
            <br /> create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
          <img
            src="media/images/smallcase-logo.png"
            className="img-fluid mt-5"
            style={{ width: "80%", paddingTop: "1rem" }}
          />
          <p
            className="text-muted text-center pt-3"
            style={{ fontSize: "0.8rem" }}
          >
            Thematic investing platform <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img
            src="media/images/tijori.svg"
            className="img-fluid"
            style={{ width: "70%" }}
          />
          <p className="text-muted text-center" style={{ fontSize: "0.8rem" }}>
            Investment research platform <br />
            that offers detailed insights on stocks,
            <br /> sectors, supply chains, and more.
          </p>
          <img
            src="media/images/ditto-logo.png"
            className="img-fluid mt-5"
            style={{ width: "70%" }}
          />
          <p
            className="text-muted text-center pt-3"
            style={{ fontSize: "0.8rem" }}
          >
            Personalized advice on life
            <br /> and health insurance. No spam
            <br /> and no mis-selling. Sign up for free
          </p>
        </div>
      </div>
        <button
            className="btn btn-primary px-4 py-2 mt-5"
            type="button"
          >
            Sign up for free
          </button>
    </div>
  );
}

export default Universe;
