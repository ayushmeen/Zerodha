import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container mt-5 mb-5 text-center text-muted'>
           <h1 className='fs-2 p-2' >Zerodha Products</h1>
           <h3 className='fs-5 p-2' >Sleek, modern, and intuitive trading platforms</h3>
           <p>Check out our           <Link
            href="#"
            className="d-inline-flex align-items-center gap-2 mt-2"
            style={{ color: "#387ed1", textDecoration: "none" }}
          >
            investment offerings
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link></p>
        </div>
     );
}

export default Hero;