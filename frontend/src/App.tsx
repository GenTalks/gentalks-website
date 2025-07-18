import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Community from './pages/Community'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Team from './pages/Team'
import Footer from './components/Footer'
import HomeButton from './components/HomeButton'
import Navbar from './components/Navbar'
import NavButton from './components/NavButton'


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-500">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App
