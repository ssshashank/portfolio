import About from '../../widgets/about/about';
import Home from '../../widgets/home/home';
import Navbar from '../../widgets/navbar/navbar'
import indexStyles from "./style.module.css";

const Index = () => {
    return (
        <div className={indexStyles.indexContainer}>
            <Navbar title="Portfolio" />
            <Home/>
            <About/>
        </div>
    )
}

export default Index