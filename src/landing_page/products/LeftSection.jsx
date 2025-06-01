import React from 'react'
import './LeftSection.css'
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
arrowIcon,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mb-5">
            <div className="row" id ='leftImage'>
                <div className="col p-5">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col " id='LeftSec'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                <div className="row">
                    <div className="col">
                        <a href={tryDemo}>{tryDemo}<i class={arrowIcon}></i></a>
                    </div>
                    <div className="col">
                        <a href={learnMore}>{learnMore} <i class={arrowIcon}></i> </a>
                    </div>

                    
                </div>
                 <div className="row" id='storeIcon'>
                    <div className="col">
                        <a href={googlePlay}>
<img src="media/image/google-play-badge.svg" alt="" />
                        </a>
                        
                    </div>
                    <div className="col">
                        <a href={appStore}>
<img src="/media/image/appstore-badge.svg" alt="" />
                        </a>
                        
                    </div>
                    
                    
                </div>
               
                </div>

            </div>
        </div>
    );
}

export default LeftSection;