import React from 'react'
import './RightSection.css'
function RightSection({
    imageURL,
    productName,
    productDescription,
   
    learnMore,
   
}) {
    return ( 
        <div className="container" id='rightWhole'>
            <div className="row">
                 
                <div className="col p-5" id='rightPara'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore}>{learnMore} <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                  <div className="col " id='rightImg'>
                    <img src={imageURL} alt="" />
                   </div>
             
            </div>
        </div>
     );
}

export default RightSection;