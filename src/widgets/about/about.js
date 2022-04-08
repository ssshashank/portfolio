import { useEffect,useRef } from "react";
import aboutStyles from "./style.module.css";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);


const About = ({index}) => {
  
  const boxRef = useRef();
    useEffect(()=>{
      console.log("BOXREF",boxRef.current);
    if(boxRef.current){
      boxRef.current=gsap.timeline({delay: 1})
      .to(boxRef.current,{
        width:"100%",
      })
      .to(boxRef.current,{
        width:"0%",
        marginLeft:"100%"
      })
    }
    return ()=>{
      // boxRef.current.kill()
      ScrollTrigger.getAll().forEach(t=>t.kill())
    }
  })

  return (
    <div className={aboutStyles.aboutContainer}>
        <div>
          <h1>ABOUT</h1>
        </div>
        <div className={aboutStyles.one}> 
          <div className={aboutStyles.two} ref={boxRef}>

          </div>
        </div>
    </div>
  )
}

export default About