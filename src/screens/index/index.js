import { useEffect,useRef } from 'react';
import About from '../../widgets/about/about';
import Home from '../../widgets/home/home';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from "gsap";
import Footer from '../../widgets/footer/footer';
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    
    const aboutRef=useRef(null);
    const footerRef=useRef(null);

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
            <section className="stacking-slide" ref={aboutRef}  >
                <About aboutRef={aboutRef}/>
            </section>
            <section className="stacking-slide">
                <Footer/>
            </section>
        </div>
    )
}

export default Index