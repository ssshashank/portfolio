import { useTypewriter, Cursor } from 'react-simple-typewriter'
import footerStyles from "./style.module.css";


const Footer = () => {
    const { text } = useTypewriter({
        words: ["my portfolio.", "my profile.", "my website."],
        loop: true,
        typeSpeed: 200,
        deleteSpeed: 100,
        delaySpeed: 1500,
    })
    return (
        <div className={footerStyles.footerContainer}>
            <div className={footerStyles.footerBody} >
                Thanks for visiting
                <p style={{color:"rgb(0, 255, 191)",marginTop:"1%"}}>
                    {text}
                    <Cursor />
                </p>
            </div>
        </div>
    )
}

export default Footer