import './Universe.css'
function Universe(){
    return(
        <div className="container">
            <div className="row text-center" id='h1'>
<h2 id='h2'>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none", textAlign:"center", marginBottom:"3rem"}}>Zerodha.tech </a>blog.</h2>
      <h1>The Zerodha Universe</h1>
      <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row mt-5 p-5" id='universeIcon'>
                <div className="col-4">
                    <div className="img">
<img src="/media/image/zerodhaFundhouse.png"  alt="" />
<br />
                    <span>Our asset management venture </span>
                   <br />
                   <span>that is creating simple and transparent index </span>
                   <br />
                   <span>funds to help you save for your goals.</span>
                    </div>
                    <br /><br /><br />
                    <div className="img">
                        <img src="/media/image/streakLogo.png" alt="" />
                        <br />
                         <span>Systematic trading platform </span>
                   <br />
                   <span>that allows you to create and backtest </span>
                   <br />
                   <span>strategies without coding.</span>
                    </div>
                    
                </div>

                <div className="col-4 ">
                    <div className="img " style={{   marginTop:"0.5rem",marginBottom:"0.2rem"}}>
                        <img src="/media/image/sensibullLogo.svg" style={{height:"2rem", marginBottom:"1rem"}} alt="" />
                       
                        <br />
                        
                     <span>Options trading platform that lets you  </span>
                   <br />
                   <span>create strategies, analyze positions, and examine </span>
                   <br />
                   <span>data points like open interest, FII/DII, and more.</span>
                    </div>
<br /><br /><br />
                    <div className="img">
 <img src="/media/image/smallcaseLogo.png" alt="" />
 <br />
                     <span>Thematic investing platform </span>
                   <br />
                   <span>that helps you invest in diversified </span>
                   <br />
                   <span>baskets of stocks on ETFs.</span>
                    </div>
                   
                </div>
                <div className="col-4">
                     <div className="img">
                        <img src="/media/image/tijori.svg"  alt="" />
                        <br />
                     <span>Investment research platform  </span>
                   <br />
                   <span>that offers detailed insights on stocks,  </span>
                   <br />
                   <span>sectors, supply chains, and more.</span>
                    </div>

                    <br /><br /><br />
                    <div className="img">
 <img src="/media/image/ditto-logo.png" style={{height:"2rem"}} alt="" />
 <br />
                     <span>Personalized advice on life  </span>
                   <br />
                   <span>and health insurance. No spam  </span>
                   <br />
                   <span>and no mis-selling.</span>
                    </div>
                </div>
            </div>
              <button type="button" class="btn btn-primary p-2 " style={{width:"13rem", margin:"3rem auto", fontSize:"20px", fontWeight:"20px", backgroundColor:"#387ed1"}}>Sign up for free</button>
              </div>
    )
}
export default Universe;