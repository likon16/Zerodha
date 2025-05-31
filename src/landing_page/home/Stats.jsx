import React from 'react'
import  './Stats.css'

function Stats(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">

<h1 className='mb-5'>Trust with confidence</h1>
<div className="stats-div">
    <h2>Customer-first always</h2>
    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
</div>
<div className="stats-div">
    <h2>No spam or gimmicks</h2>
    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a href=''> Our philosophies</a> </p>
</div>
<div className="stats-div">
    <h2>The Zerodha universe</h2>
    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
</div>
<div className="stats-div">
    <h2>Do better with money</h2>
    <p>With initiatives like <a href=''> Nudge</a> and <a href="">Kill Switch</a> , we don't just facilitate transactions, but actively help you do better with your money.</p>
</div>

                </div>
                <div className="img col-6 p-5">
                    <img src="/media/image/ecosystem.png" alt=""style={{width:"100%"}} />
                    
                        <div className='link'>
                            <a href=""> Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            <a href="">Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;