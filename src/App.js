import './App.css';
import Home from './sections/Home';
import CreateSellNFT from './sections/CreateSellNFT';
import NotableDrops from './sections/NotableDrops';

function App() {
  return (
    <div className="App">
      <Home />
      <div className='bg-[#E5E5E5]'>
      <CreateSellNFT />
      <NotableDrops />
      </div>
    </div>
  );
}

export default App;
