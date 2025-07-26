import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Home from './pages/Home';
import BookAMentor from './pages/BookAMentor';
import Resources from './pages/Resources';
import FAQs from './pages/FAQs';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Adulting from './pages/Adulting';
import CollegePrep from './pages/CollegePrep';
import FinancialAid from './pages/FinancialAid';
import Internships from './pages/Internships';
import NavHS from './pages/NavHS';
import Scholarships from './pages/Scholarships';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/book-a-mentor" element={<BookAMentor />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/how-to-adult" element={<Adulting />} />
            <Route path="/college-prep" element={<CollegePrep />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/navigating-high-school" element={<NavHS />} />
            <Route path="/scholarships" element={<Scholarships />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;