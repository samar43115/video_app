import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoUrl" element={<VideoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
