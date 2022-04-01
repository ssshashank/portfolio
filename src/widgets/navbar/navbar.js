import navbarStyles from "./style.module.css";
import nextIcon from "../../assets/next.png"

const Navbar = ({ title }) => {
    return (
        <div className={navbarStyles.navbarContainer}>
            <div className={navbarStyles.navbarTitle}>
                <h1 className={navbarStyles.title}>{title}</h1>
            </div>
            {/* <div className={navbarStyles.navbarExtras}>
                <div className={navbarStyles.navbarConnect}>
                    <p>Dribble</p>
                    <p>Instagram</p>
                    <p>Behance</p>
                </div>
                <div className={navbarStyles.navbarAbout}>
                    <p>About & Services</p>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar