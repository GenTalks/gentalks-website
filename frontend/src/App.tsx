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

        <div className="flex justify-center space-x-4 mt-4">
          <HomeButton />
          <NavButton to="/about" label="About" />
          <NavButton to="/community" label="Community" />
          <NavButton to="/contact" label="Contact" />
          <NavButton to="/shop" label="Shop" />
          <NavButton to="/team" label="Team" />
        </div>
        
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
