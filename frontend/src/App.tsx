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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-laurel text-cream">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourstory" element={<Story />} />
            <Route path="/community" element={<Community />} />
            <Route path="/content" element={<Content />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/termsconditions" element={<TermsConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
