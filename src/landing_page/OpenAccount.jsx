import React from 'react'
function OpenAcount() {
    return ( 
        <div className="container p-5" >
            <div className="row text-center">
                <img src="media/image/homeHero.png" alt=""className='mb-6 ' style={{width:"60rem", margin:"0 auto"}}/>
                <h1 className='mt-5 mb-4' style={{fontSize:"35px", color:"dark-grey"}}> Open a Zerodha account</h1>
                <p className='mb-5' style={{fontSize:"19px"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button type="button" class="btn btn-primary p-2 " style={{width:"13rem", margin:"0 auto", fontSize:"20px", fontWeight:"20px", backgroundColor:"#387ed1"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default OpenAcount;