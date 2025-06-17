import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div className="container mt-5">
          <div className="section1">
 <h1>Charges</h1>
          <p>List of all charges and taxes</p>
          </div>
         <div className="row " id='section2' style={{marginBottom:"1rem", marginLeft:"5rem" }}>
          <div className="col">
            <img src="\media\image\pricing0.svg" alt="" />
            <br /><h1>Free equity delivery</h1>
            
            <span>All equity delivery investments (NSE, BSE),</span>
            <br /><span>
              are absolutely free — ₹ 0 brokerage.
            </span>

          </div>
          <div className="col">
<img src="\media\image\intradayTrades.svg" alt="" />
<br />
<h1>Intraday and F&O trades</h1>

<span>Flat ₹ 20 or 0.03% (whichever is lower) per</span>
<br /><span>executed order on intraday trades across</span>
<br /> <span> equity, currency, and commodity trades. Flat</span>
<br /><span>₹20 on all option trades.</span>
          </div>
          <div className="col">
             <img src="\media\image\pricing0.svg" alt="" />
             <br />
             <h1>Free direct MF</h1>
            <span>
              All direct mutual fund investments are</span>
              <br /><span>All direct mutual fund investments are</span>
              <br /><span>charges.</span>
          </div>
         </div>

       
        </div>
      );
}

export default Hero;