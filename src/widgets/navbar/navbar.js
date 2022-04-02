import navbarStyles from "./style.module.css";
// import nextIcon from "../../assets/next.png"


const Navbar = ({ title }) => {
    return (
        <div className={navbarStyles.navbarContainer}>
            <div className={navbarStyles.navbarTitle}>
                <h1 className={navbarStyles.title}>{title}</h1>
            </div>
        </div>
    )
}

export default Navbar