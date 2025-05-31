import React from 'react'

function Awards(){
    return (
        <div className="container mt-5 mb-5 ">
            <div className="row">
                <div className="col-lg-6 col-sm-2 p-5">
                    <img src="/media/image/largestBroker.svg" alt="" />

                </div>
                <div className="col-lg-6 col-sm-2 mt-4 p-5">
<h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ milllion Zerodha clients contributes to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                   
                    <div className="row mb-4" >
                        <div className="col">
 <ul>
                        <li >Features and Options</li>
                        <br />
                        <li>Comodity derivatives</li><br />
                        <li>Currency derivatives</li>
                    </ul>
                        </div>
                        <div className="col">
                             <ul>
                        <li >Stocks and IPOs</li>
                        <br />
                        <li>Direct mutual funds</li><br />
                        <li>Bonds and Gov. Securities</li>
                    </ul>
                        </div>
                    </div>
                    
                    <img src="/media/image/pressLogos.png" alt="" style={{width:"80%"}} />
                </div>
            </div>
        </div>
    )
}

export default Awards;