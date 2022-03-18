import "./App.css";
import { Ad } from "./Components/Ad";
import { Hero } from "./Components/Hero";
import { How } from "./Components/How";
import { Nav } from "./Components/Nav/Nav";
import { Services } from "./Components/services";
import { images } from "./Components/How/CardData";
import { Stats } from "./Components/Stats";
import { Footer } from "./Components/footer";
import { Slider } from "./Components/carousel";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <How />
      <Ad
        img={images[0].img}
        head="Control your appliances from any where, any time"
        sub="Get the App"
      />
      <Services />
      <Ad
        img={images[1].img}
        head="Smart Home Security For Your Home"
        sub="Get the App"
      />
      <Stats />
      <Ad
        head="Happy customers"
        sub="Feedback from these happy customers help us in reaching new heights"
      >
        <Slider/>
      </Ad>
      
      <Footer/>
    </div>
  );
}

export default App;
