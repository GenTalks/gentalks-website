import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import Team from './pages/Team';

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
            <Route path="/team" element={<Team />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
