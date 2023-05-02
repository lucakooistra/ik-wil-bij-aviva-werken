import "../styles/index.scss";
import Recipes from "./Recipes";
import Navbar from "./Navbar";
import Card from "./Card";


const App = () => {
    return (
        <div>
            <div className="home-background-body">
                <div className="home-hero">

                    <Navbar />

                    <h1 className="home-h1"><span>Lorem ipsum</span> dolor sit dolor sit
                        <br />  amet sit amet consectetur.</h1>
                </div>

            </div>
            <div className="Card">
                <Card
                title="Lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur."
                link="//www.google.com"
                />
                <Card 
                greyBackground={true}
                image="../images/Image.png" 
                title="Lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur."
                />
                <Card 
                title="Lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur."
                />
                <Card 
                greyBackground={true}
                image="../images/Image.png" 
                title="Lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur."
                />
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