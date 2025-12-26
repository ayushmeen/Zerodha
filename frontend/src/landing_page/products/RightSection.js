import React from 'react'

function RightSection({
imageUrl,
  productName,
  productDescription,
  tryDemo,
}) {
 return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-12 col-md-6 px-5 py-5 mt-5">
          <h1 className="pt-3 pb-3 text-muted">{productName}</h1>
          <p className="pb-1 text-muted">{productDescription}</p>
          <div className="pb-3">
            <a href={tryDemo}   className="pe-3" style={{textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
            
          </div>
        </div>
        <div className="col-12 col-md-6 ">
          <img src={imageUrl} className="img-fluid" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;