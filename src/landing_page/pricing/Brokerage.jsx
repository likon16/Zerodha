import React from 'react'
function Brokerage() {
    return ( 
       <div className="container">
          <div className="row p-5">
          <div className="col-8">
            <h1 style={{color:"skyblue",fontSize:"2rem"}}>Brokarage calculator</h1>
            <ul style={{fontSize:"0.9rem",opacity:"0.7",lineHeight:"3rem"}}>
                <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract not will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. </li>
                <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            </ul>
          </div>
          <div className="col-4">
            <h1 style={{color:"skyblue"}}>List of charges</h1>
          </div>
         </div>
       </div>
     );
}

export default Brokerage;