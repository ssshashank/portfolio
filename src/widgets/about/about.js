import { useEffect,useRef } from "react";
import aboutStyles from "./style.module.css";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap} from "gsap";
gsap.registerPlugin(ScrollTrigger);


const About = ({aboutRef}) => {
  
  const boxRef = useRef(null);
  const one=useRef(null)
  let lastScrollToTop=0;
  
  const onScroll = () => {

    // const scrollPos = window.scrollY + window.innerHeight
    // console.log("aboutRef current---",aboutRef.current.getBoundingClientRect().top)
    // console.log("scrollPOs----",scrollPos)
    
    
    if (aboutRef.current.getBoundingClientRect().top<1) {
      // enter animation code here
      
      boxRef.current=gsap.timeline({delay: 1,reversed:true,ease:"elastic"})
      .to(boxRef.current,{
        width:"100%",
      })
      .to(boxRef.current,{
        // delay: 0.1,
        width:"0%",
        marginLeft:"100%",
        // ease:Power2.easeInOut
      })
      
    }else if(aboutRef.current.getBoundingClientRect().top>900){
      boxRef.current.pause(0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll,false)
    return () => window.removeEventListener("scroll", onScroll,true)
  },[])
  

  return (
    <div className={aboutStyles.aboutContainer}>
        <div>
          <h1>ABOUT</h1>
        </div>
        <div className={aboutStyles.one} ref={one}> 
          <div className={aboutStyles.two} ref={boxRef}>
          </div>
        </div>
    </div>
  )
}

export default About