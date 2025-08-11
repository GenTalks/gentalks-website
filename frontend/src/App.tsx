import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Community from "./pages/Community";
import Blogs from "./pages/Blogs";
import BlogPostPage from "./pages/BlogPostPage";
import StudentCenter from "./pages/StudentCenter";
import Home from "./pages/Home";
import BookAMentor from "./pages/BookAMentor";
import Resources from "./pages/Resources";
import FAQs from "./pages/FAQs";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Adulting from "./pages/Adulting";
import CollegePrep from "./pages/CollegePrep";
import StudyResources from "./pages/StudyResources";
import Internships from "./pages/Internships";
import NavHS from "./pages/NavHS";
import Scholarships from "./pages/Scholarships";
import StudentStories from "./pages/StudentStories";
import StudentStory from "./pages/StudentStoryPage";
import StudentProjects from "./pages/StudentProjects";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/student-center" element={<StudentCenter />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/book-a-mentor" element={<BookAMentor />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/how-to-adult" element={<Adulting />} />
            <Route path="/college-prep" element={<CollegePrep />} />
            <Route path="/study-resources" element={<StudyResources />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/navigating-high-school" element={<NavHS />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/student-stories" element={<StudentStories />} />
            <Route path="/student-story/:slug" element={<StudentStory />} />
            <Route path="/student-projects" element={<StudentProjects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
