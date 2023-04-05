import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";


const App = () => {
    return (
        <>
            <main>
                <img src={sword} alt="sword" width="250px"/>
                <img src={swordSvg} alt="sword" width="250px"/>
                <Recipes />
            </main>
        </>
    )
}

export default App