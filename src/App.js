import './App.css';
import Home from './sections/Home';
import CreateSellNFT from './sections/CreateSellNFT';
import NotableDrops from './sections/NotableDrops';
import Banner from './components/Banner';
import TrendingCategories from './sections/TrendingCategories';
import ExploreCategories from './sections/ExploreCategories';
import FAQ from './sections/FAQ';
import Resources from './sections/Resources';

function App() {
  return (
    <div className="App">
      <Home />
      <div className='bg-[#F4FAFF]'>
      <CreateSellNFT />
      <NotableDrops />
      <Banner />
      <TrendingCategories />
      <ExploreCategories />
      <FAQ />
      <Resources />
      </div>
    </div>
  );
}

export default App;
