import Listing from './components/Listing/Listing'
import './App.css';
import * as data from './data/etsy.json'

function App() {
  const items = [];
  data.default.forEach(i=> {
    items.push(i)
  });
  
    return (
      <div className="App">
        <Listing items = {items}/>
      </div>
    );
    
}

export default App;
