import { useEffect,useState } from 'react';
import About from '../../widgets/about/about';
import Home from '../../widgets/home/home';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from "gsap";
import Footer from '../../widgets/footer/footer';
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    
    
    useEffect(()=>{
        gsap.utils.toArray(".stacking-slide").map((item, i) => {
            
            ScrollTrigger.create({
                id:"myId",
                trigger: item,
                start: "top top", 
                pin: true, 
                pinSpacing: false,
                snap: 1
            });
            // setIndex(i)
        });

        return ()=>{
            ScrollTrigger.getAll().forEach(t=>t.kill())
        }
        // console.log("index---",index)
    },[])
    
    return (
        <div className="main" id="main">
            <section className="stacking-slide" >
                <Home/>
            </section>
            <section className="stacking-slide" >
                <About/>
            </section>
            <section className="stacking-slide">
                <Footer/>
            </section>
        </div>
    )
}

export default Index