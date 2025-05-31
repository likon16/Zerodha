import Awards from './Awards'; // this should be Awards, not Hero
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Hero from './Hero';
import TopNav from '../TopNav';
import Footer from '../Footer';
import OpenAcount from '../OpenAccount';


function HomePage(){
    return (
        <>
        
        <Hero/>
        <Awards/>
         <Stats/>
         <Pricing/>
        <Education/>
        
       <OpenAcount/>
       
        
        </>
       
       
    )
}

export default HomePage;