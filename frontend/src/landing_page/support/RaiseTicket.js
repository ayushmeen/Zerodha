import React from 'react'

function RaiseTicket() {
 return (
    <div className="ticket-topics">
      <div className="container py-5">
        <h2 className="mb-4">To create a ticket, select a relevant topic</h2>

        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-md-4 mb-4">
            <h6 className="topic-heading">
              <span className="icon">+</span> Account Opening
            </h6>
            <ul className="topic-list">
              <li><a href="#">Online Account Opening</a></li>
              <li><a href="#">Offline Account Opening</a></li>
              <li><a href="#">Company, Partnership and HUF Account Opening</a></li>
              <li><a href="#">NRI Account Opening</a></li>
              <li><a href="#">Charges at Zerodha</a></li>
              <li><a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
              <li><a href="#">Getting Started</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4 mb-4">
            <h6 className="topic-heading">
              <span className="icon">👤</span> Your Zerodha Account
            </h6>
            <ul className="topic-list">
              <li><a href="#">Login Credentials</a></li>
              <li><a href="#">Account Modification and Segment Addition</a></li>
              <li><a href="#">DP ID and bank details</a></li>
              <li><a href="#">Your Profile</a></li>
              <li><a href="#">Transfer and conversion of shares</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4 mb-4">
            <h6 className="topic-heading">
              <span className="icon">📊</span> Your Zerodha Account
            </h6>
            <ul className="topic-list">
              <li><a href="#">Margin/leverage, Product and Order types</a></li>
              <li><a href="#">Kite Web and Mobile</a></li>
              <li><a href="#">Trading FAQs</a></li>
              <li><a href="#">Corporate Actions</a></li>
              <li><a href="#">Sentinel</a></li>
              <li><a href="#">Kite API</a></li>
              <li><a href="#">Pi and other platform</a></li>
              <li><a href="#">Stockreports+</a></li>
              <li><a href="#">GTT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;