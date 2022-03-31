import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Listvideos from "./pages/listvideos/Listvideos";
import Likedvideos from './pages/likedvideos/Likedvideos'
import Playlists from './pages/playlists/Playlists'
import Videopage from './pages/videopage/Videopage'
import Watchhistory from './pages/watchhistory/Watchhistory'
import Watchlater from './pages/watchlater/Watchlater'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Listvideos" element={<Listvideos />} />
        <Route path="/likedvideos" element={<Likedvideos />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/videopage" element={<Videopage />} />
        <Route path="/watchhistory" element={<Watchhistory />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
  );
}

export default App;