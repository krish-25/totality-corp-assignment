import "./App.css";
import Home from "./sections/Home";
import CreateSellNFT from "./sections/CreateSellNFT";
import NotableDrops from "./sections/NotableDrops";
import Banner from "./components/Banner";
import TrendingCategories from "./sections/TrendingCategories";
import ExploreCategories from "./sections/ExploreCategories";
import FAQ from "./sections/FAQ";
import Resources from "./sections/Resources";
import Footer from "./sections/Footer";
import Asset1 from "./assets/background_assets/Asset202a.png";
import Asset2 from "./assets/background_assets/Asset202c.png";
import Asset3 from "./assets/background_assets/Asset152b.png";
import Asset4 from "./assets/background_assets/Asset202b.png";
import Asset5 from "./assets/background_assets/Asset152a.png";
import Asset6 from "./assets/background_assets/Asset152c.png";

import Vector1 from "./assets/background_assets/Vector56.png";
import Vector2 from "./assets/background_assets/Vector57.png";
import Vector3 from "./assets/background_assets/Vector58.png";
import Vector4 from "./assets/background_assets/Vector60.png";

function App() {
  return (
    <div
      style={{
        background:
          "radial-gradient(35.97% 45.7% at 50% 67.41%, #C4C4C4 0%, rgba(196, 196, 196, 0.37) 50.52%, rgba(196, 196, 196, 0) 100%)",
          
      }}
      className="App"
    >
      <Home />
      <div className="bg-[#F4FAFF]" >
        <img
          className="absolute"
          style={{
            top: 1021,
            right: 0,
          }}
          src={Asset1}
        />
        <img
          className="absolute"
          style={{
            top: 800,
            left: 0,
          }}
          src={Asset6}
        />
        <CreateSellNFT />
        <img
          className="absolute"
          style={{
            top: 1858,
            left: 0,
          }}
          src={Asset2}
        />
        <img
          className="absolute"
          style={{
            top: 2000,
            right: 0,
          }}
          src={Asset3}
        />
        <NotableDrops />
        <Banner />
        <img
          className="absolute"
          style={{
            top: 3000,
            left: 0,
          }}
          src={Asset4}
        />
        <img
          className="absolute"
          style={{
            top: 3447,
            right: 0,
          }}
          src={Asset5}
        />
        <TrendingCategories />
        <img
          className="absolute"
          style={{
            top: 3856,
            left: 0,
          }}
          src={Asset5}
        />
        <ExploreCategories />
        <img
          className="absolute"
          style={{
            top: 4600,
            left: 250,
          }}
          src={Asset5}
        />
        <FAQ />
        <img
          className="absolute"
          style={{
            top: 5250,
            left: 200,
          }}
          src={Asset5}
        />
        <img
          className="absolute"
          style={{
            top: 5200,
            right: 0,
          }}
          src={Asset1}
        />
        <Resources />
        <img
          className="absolute"
          style={{
            top: 5650,
            left: 0,
          }}
          src={Asset6}
        />
        <img
          className="absolute"
          style={{
            top: 6000,
            right: 0,
          }}
          src={Asset5}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
