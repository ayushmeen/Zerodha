import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 px-5 py-5">
          <img src={imageUrl} className="img-fluid" alt="img" />
        </div>
        <div className="col-12 col-md-6 px-5 py-5">
          <h1 className="pt-3 pb-3 text-muted">{productName}</h1>
          <p className="pb-1 text-muted">{productDescription}</p>
          <div className="pb-3">
            <a href={tryDemo}   className="pe-3" style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div>
            <a href="#" style={{textDecoration:"none"}}>
              <img src={googlePlay} alt="img" className="img-fluid pe-4" />{" "}
            </a>
            <a href="#" style={{textDecoration:"none"}}>
              <img src={appStore} alt="img" className="img-fluid" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
