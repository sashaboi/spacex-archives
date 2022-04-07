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
import Mockman from "mockman-js";
import Singlevideo from "./pages/singlevideo/Singlevideo";
import SinglePlaylist from "./pages/singleplaylist/SinglePlaylist";
import Alert from "./components/alert/Alert";
import LostPage from "./pages/lostpage/LostPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<LostPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Listvideos" element={<Listvideos />} />
        <Route path="/likedvideos" element={<Likedvideos />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/videopage" element={<Videopage />} />
        <Route path="/watchhistory" element={<Watchhistory />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/alert" element={<Alert />} />
        {/* <Route path="/singlevideo" element={<Singlevideo />} /> */}
        <Route path="/singlevideo/:id" element={<Singlevideo />} />
        <Route path="/singleplaylist/:id" element={<SinglePlaylist />} />
        
      </Routes>
    </div>
  );
}

export default App;
