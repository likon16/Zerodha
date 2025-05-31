import React from 'react'
import './Education.css'
function Education(){
    return (
        <div className="container">
            <div className="row">
                <div className="col ">
                    <img src="/media/image/education.svg" alt="" />
                </div>
                <div className="col education p-5">
                    <h1 style={{fontSize:"35px ", opacity:"0.8"}}>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
               <a href="">Varsity &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
           <br /><br />
               <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
               <a href="">TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
            </div>
        </div>
    )
}

export default Education;