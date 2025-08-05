import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import About from "./src/pages/About";
import Community from "./src/pages/Community";
import Contact from "./src/pages/Contact";
import Content from "./src/pages/Content";
import Home from "./src/pages/Home";
import BookAMentor from "./src/pages/BookAMentor";
import Resources from "./src/pages/Resources";
import FAQs from "./src/pages/FAQs";
import TermsConditions from "./src/pages/TermsConditions";
import PrivacyPolicy from "./src/pages/PrivacyPolicy";
import Adulting from "./src/pages/Adulting";
import CollegePrep from "./src/pages/CollegePrep";
import StudyResources from "./src/pages/StudyResources";
import Internships from "./src/pages/Internships";
import NavHS from "./src/pages/NavHS";
import Scholarships from "./src/pages/Scholarships";

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
            <Route path="/study-resources" element={<StudyResources />} />
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
