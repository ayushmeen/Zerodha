import React from "react";

function Footer() {
  return (
    <footer className="border-top pt-5 mt-5 bg-white">
      <div className="container-fluid">

        {/* Top Section */}
        <div className="row gy-4">
          
          {/* Logo + Copyright */}
          <div className="col-lg-3 col-md-6">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha"
              height="20"
              className="mb-3"
            />
            <p className="small text-muted mb-2">
              © 2010 – 2025, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 fs-5 text-muted">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold">Account</h6>
            <ul className="list-unstyled footer-links">
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold">Support</h6>
            <ul className="list-unstyled footer-links">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold">Company</h6>
            <ul className="list-unstyled footer-links">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold">Quick links</h6>
            <ul className="list-unstyled footer-links">
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 small text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. Depository services through Zerodha Broking Ltd. –
            SEBI Registration no.: IN-DP-431-2019.
          </p>
          <p>
            Investments in securities market are subject to market risks.
            Read all the related documents carefully before investing.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="d-flex flex-wrap gap-3 small text-muted border-top pt-3 mt-3">
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <span>Terms & conditions</span>
          <span>Policies & procedures</span>
          <span>Privacy policy</span>
          <span>Disclosure</span>
          <span>For investor’s attention</span>
          <span>Investor charter</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
