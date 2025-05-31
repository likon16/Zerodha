import React from 'react'
import './Team.css'
function Teams() {
    return ( 
        <div className="container">
            <div className="row p-5">
                <div className="col text-center" id='img'>
                    <img src="./media/image/nithinKamath.jpg" alt="" /><br />
                    <h2>Nithin Kamath</h2><br />
                    <p>Founder, CEO</p>
                </div>
                <div className="col" id='Secondpara'>
                    <h1>People</h1>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /  <a href="">Twitter</a> </p>
                </div>
            </div>


            <div className="team col">
              
                <div className="coll"><img src="/media/image/Nikhil.jpg" alt="" />
                <h1>Nikhil Kamath</h1>
                <p>Co-founder & CFO</p>
                </div>
                <div className="coll"><img src="/media/image/Kailash.jpg" alt="" />
                <h1>
                    Dr. Kailash Nadh
                </h1>
                <p>CTO</p>
                </div>
                <div className="coll"><img src="/media/image/Venu.jpg" alt="" />

                <h1>Venu Madhav</h1>
                <p>COO</p>
                </div>
               
                
                <div className="coll"><img src="/media/image/Hanan.jpg" alt="" />
                 <h1>Hanan Delvi</h1>
                <p>CCO</p>
                </div>
                <div className="coll"><img src="/media/image/Seema.jpg" alt="" />
                <h1>Seema Patil</h1>
                <p>Director</p>
                
                </div>
                <div className="coll"><img src="/media/image/karthik.jpg" alt="" />
                
                <h1>Karthik Rangappa</h1>
                <p>Chief of Education</p>
                </div>
               
               <div className="coll"><img src="/media/image/Kailash.jpg" alt="" />
               <h1>Austin Prakesh</h1>
               <p>Director Strategy</p>
               </div>
            </div>
        </div>
     );
}

export default Teams;