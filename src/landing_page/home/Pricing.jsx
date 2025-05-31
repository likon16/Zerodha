import React from 'react'
import './Pricing.css'
function Pricing(){
    return (
        <div className="container mb-5">
            <div className="row ">
                <div className="col-5 p-5 head ">
                    <h1>Unbeatable pricing</h1>
                    <p> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                {/* <div className="col-2"></div> */}
                <div className="pricing col-7 p-5">
                    <div className="row account">
                        <div className="col">
                            <img src="/media/image/pricing0.svg" alt="" />
                            <span> Free account
opening</span>
                        </div>
                        <div className="col">
                            <img src="/media/image/pricing0.svg" alt="" />
                            <span>Free equity delivery
and direct mutual funds</span>
                            </div>
                        <div className="col"> 
                            <img src="/media/image/other-trades.svg" alt="" />
                            <span>Intraday and
F&O</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Pricing;