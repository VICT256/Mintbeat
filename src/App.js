import { Route, Routes } from 'react-router-dom';
import MusicPlayer from './components/music-player/MusicPlayer';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Profile from './pages/Profile';


function App() {
	return (
		<div className="relative">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Mint" element={<Mint />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
			<MusicPlayer />
		</div>
	);
}

export default App;
