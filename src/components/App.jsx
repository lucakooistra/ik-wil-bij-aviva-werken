import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";
import Navbar from "./Navbar";


const App = () => {
    return (
        <div className="home-background-body">
            <div className="home-hero">
                <Navbar />
                <h1 className="home-h1">Lorem ipsum dolor sit dolor sit amet sit amet consectetur.</h1>
            </div>
        </div>
    )
}

export default App
/* <main>
    <img src={sword} alt="sword" width="250px"/>
    <img src={swordSvg} alt="sword" width="250px"/>
    <Recipes />
</main> */