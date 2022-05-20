import './App.css';
import Home from './sections/Home';
import CreateSellNFT from './sections/CreateSellNFT';

function App() {
  return (
    <div className="App">
      <Home />
      <div className='bg-[#E5E5E5]'>
      <CreateSellNFT />
      </div>
    </div>
  );
}

export default App;
