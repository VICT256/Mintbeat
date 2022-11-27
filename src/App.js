import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Profile from './pages/Profile';


function App() {
	return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
