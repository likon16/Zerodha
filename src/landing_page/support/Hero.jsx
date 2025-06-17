
import './Hero.css'
function Hero(){
    return(
     <div className="main">
<div className="row p-5 m-5" id='supportHero'>

        <div className="col"><h1 style={{marginLeft:"-29%",fontSize:"1.2rem"}}>Support Portal</h1></div>
        <div className="col"> <h1><a href="" style={{fontSize:"1rem",color:"white", marginLeft:"60%"}}>Track tickets</a></h1></div>
</div>

<div className="row " id='supportHero2'>
    
    <div className="col">
        
        <h1>Search for an answer or browse help topics to create a ticket</h1>
        <form action="">
            <input type="text" id='input' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' />
        </form>
       
        </div>
    <div className="col" id='supportlink2'>
        <h1>Featured</h1>
        <div className="ol">
            <ol>
                <li><a href="">Surveillance measure on scrips - June 2025</a></li>
                <li><a href="">Rights Entitlements listing in June 2025</a></li>
            </ol>
        </div>
    </div>
</div>
 <div className="row mb-5" id='supportlink'>
    <div className="col mb-5 p-3">
 <span> <a href="">Track account opening</a> </span> &nbsp;

            <span><a href="">Track segment activation</a></span> 
            <br />
            <span><a href="">Intraday margins</a></span>&nbsp;
           

            <span><a href="">Kite user manual</a></span>
    </div>

   
        </div>
     </div>
    )
}

export default Hero;