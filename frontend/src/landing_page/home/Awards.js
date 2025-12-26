import React from 'react';

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-12">
          <h1 className="fs-2">
            Largest stock broker in India
          </h1>

          <p className="mt-4 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-3">
            <div className="col-6">
              <ul className="ps-3">
                <li className="text-muted">Futures and Options</li>
                <li className="text-muted">Commodity derivatives</li>
                <li className="text-muted">Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="ps-3">
                <li className="text-muted">Stocks & IPOs</li>
                <li className="text-muted">Direct mutual funds</li>
                <li className="text-muted">Bonds</li>
              </ul>
            </div>
          </div>

          {/* Logos */}
          <img
            src="media/images/pressLogos.png"
            alt="Press logos"
            className="img-fluid mt-3"
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
