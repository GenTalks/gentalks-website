import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Story from './pages/Story';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import Resources from './pages/Resources';
import FAQs from './pages/FAQs';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CodeConduct from './pages/CodeConduct';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-laurel text-cream">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/community" element={<Community />} />
            <Route path="/content" element={<Content />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/code-of-conduct" element={<CodeConduct />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
