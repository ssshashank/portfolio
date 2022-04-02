import { useEffect } from 'react';
import About from '../../widgets/about/about';
import Home from '../../widgets/home/home';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    
    useEffect(()=>{
        gsap.utils.toArray(".stacking-slide").forEach((item, i) => {
            ScrollTrigger.create({
                id:"myId",
                trigger: item,
                start: "top top", 
                pin: true, 
                pinSpacing: false,
                snap: 1
            });
        });
        
    },[])
    return (
        <div className="main" id="main">
            <section className="stacking-slide">
                <Home/>
            </section>
            <section className="stacking-slide">
                <About/>
            </section>
        </div>
    )
}

export default Index