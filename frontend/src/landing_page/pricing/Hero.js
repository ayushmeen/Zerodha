import React from 'react'

function Hero() {
    return ( 
        <div className="col-lg-12 col-md-4 col-12 container">
            <div className='text-center text-muted mt-5 mb-5'>
                <h1 className='fs-3 pb-3'>Pricing</h1>
                <h3 className='fs-5'>Free equity investments and flat &#8377;20 Intraday and F&O</h3>
            </div>
          <div className="row text-center gy-4 border-top mt-5">

            <div className="col-md-4 col-12">
              <img
                src="media/images/pricingEquity.svg"
                alt="Free account opening"
                className="img-fluid mb-2"
                style={{ maxWidth: "100%" }}
              />
              <h3>Free equity delivery</h3>
              <p className="text-muted small mb-0">
                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
              </p>
            </div>

            <div className="col-md-4 col-12">
              <img
                src="media/images/pricingEquity.svg"
                alt="Free equity delivery"
                className="img-fluid mb-2"
                style={{ maxWidth: "100%" }}
              />
              <h3>Free direct MF</h3>
              <p className="text-muted small mb-0">
                
                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
              </p>
            </div>

            <div className="col-md-4 col-12">
              <img
                src="media/images/other-trades.svg"
                alt="Intraday and F&O"
                className="img-fluid mb-2"
                style={{ maxWidth: "100%" }}
              />
              <h3>Intraday and F&O</h3>
              <p className="text-muted small mb-0">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
              </p>
            </div>

          </div>
        </div>
     );
}

export default Hero;