import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5">
      <h3 className="mb-4">Charges for account opening</h3>

      <div className="border rounded">
        {/* Header */}
        <div className="row border-bottom fw-semibold px-3 py-3">
          <div className="col-8">Type of account</div>
          <div className="col-4 text-end">Charges</div>
        </div>

        {/* Row 1 */}
        <div className="row  px-3 py-3 align-items-center">
          <div className="col-8">Online account</div>
          <div className="col-4 text-end">
            <span className="badge bg-success px-3 py-2">FREE</span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row  px-3 py-3 align-items-center">
          <div className="col-8">Offline account</div>
          <div className="col-4 text-end">
            <span className="badge bg-success px-3 py-2">FREE</span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row px-3 py-3 align-items-center">
          <div className="col-8">NRI account (offline only)</div>
          <div className="col-4 text-end fs-5">₹ 500</div>
        </div>

        {/* Row 4 */}
        <div className="row px-3 py-3 align-items-center">
          <div className="col-8">
            Partnership, LLP, HUF, or Corporate accounts (offline only)
          </div>
          <div className="col-4 text-end fs-5" >₹ 500</div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
