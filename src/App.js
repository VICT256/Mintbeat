import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';

function App() {
	return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mint" element={<Mint />} />
      </Routes>
    </div>
  );
}

export default App;
