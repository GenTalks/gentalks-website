import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-laurel text-cream">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />\
            <Route path="/team" element={<Team />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
