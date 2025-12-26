import React from 'react'

function OpenAccount() {
    return ( 
        <div className='container p-5 mt-5 mb-5'>
            <div className='row text-center'>
               <h1 className='text-center text-muted fs-2 mt-5'>
                Open a Zerodha account
               </h1>
               <p className='mt-1 text-muted mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
               <button className="btn btn-primary p-2 mt-3" type="submit" style={{width:"20%", margin:"0 auto"}}>Sign up for free </button>
            </div>

        </div>
     );
}

export default OpenAccount;