import Navbar from '../../widgets/navbar/navbar'
import layoutStyles from "./style.module.css";

const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout