import React from 'react'

function Hero(){
    return (
        <div className="container p-5" >
            <div className="row text-center">
                <img src="media/image/homeHero.png" alt=""className='mb-6 mt-5 p-5' style={{width:"60rem", margin:"0 auto"}}/>
                <h1 className='mt-5' style={{fontSize:"45px"}}> Invest in everything</h1>
                <p className='mb-5' style={{fontSize:"22px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button type="button" class="btn btn-primary p-2 " style={{width:"13rem", margin:"0 auto", fontSize:"20px", fontWeight:"20px", backgroundColor:"#387ed1"}}>Sign up for free</button>
            </div>
        </div>
    )
}

export default Hero;