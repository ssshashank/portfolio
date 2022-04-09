import { useEffect,useRef } from "react";
import aboutStyles from "./style.module.css";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap} from "gsap";
gsap.registerPlugin(ScrollTrigger);


const About = ({index}) => {
  
  const boxRef = useRef(null);
  const one=useRef(null)
  const onScroll = () => {

    const scrollPos = window.scrollY + window.innerHeight
    console.log("boxref current---",one.current.getBoundingClientRect())
    console.log("scrollPOs----",scrollPos)
    if (one.current.getBoundingClientRect().top < scrollPos) {
  
      // enter animation code here
      boxRef.current=gsap.timeline({delay: 1})
      .to(boxRef.current,{
        width:"100%",
      })
      .to(boxRef.current,{
        // delay: 0.1,
        width:"0%",
        marginLeft:"100%",
        // ease:Power2.easeInOut
      })
    }
  
    
  
  }
  useEffect(() => {

    window.addEventListener("scroll", onScroll,true)
  
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