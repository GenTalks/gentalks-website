import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Community from './pages/Community';
import Media from './pages/Media';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import Teams from './pages/Teams';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-laurel text-cream">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/media" element={<Media />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
