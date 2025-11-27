import { useState } from "react";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";
import NavButton from "./NavButton";
import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabase";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const navLinks = [
    { to: "/community", label: "Community" },
    { to: "/about", label: "About" },
    { to: "/student-center", label: "Student Center" },
    { to: "/blogs", label: "Blogs" },
    { to: "/resources", label: "Resources" },
    { to: "/faqs", label: "FAQs" },
  ];

  const renderStaffControls = () => {
    if (user) {
      return (
        <>
          <NavButton
            to="/staff-dashboard"
            label="Staff Dashboard"
            onClick={() => setOpen(false)}
            className="bg-laurel text-cream px-6 py-2 rounded-full hover:bg-basil font-teachers"
          />
          <button
            onClick={handleLogout}
            className="bg-laurel text-cream px-6 py-2 rounded-full hover:bg-basil font-teachers"
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <NavButton
          to="/staff-login"
          label="Staff Login"
          onClick={() => setOpen(false)}
          className="bg-laurel text-cream px-6 py-2 rounded-full hover:bg-basil font-teachers"
        />
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 2xl:px-12 py-4 bg-cream shadow-sm tracking-wide relative">
      <div className="shrink-0">
        <HomeButton onClick={() => setOpen(false)} />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 2xl:static 2xl:transform-none 2xl:flex-1 2xl:ml-6">
        <Link to="/" onClick={() => setOpen(false)}>
          <h1 className="font-teachers text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[36px] text-laurel tracking-widest text-center 2xl:text-left cursor-pointer whitespace-nowrap">
            GENTALKS
          </h1>
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden 2xl:flex items-center gap-4 flex-shrink-0">
        <div className="flex gap-4 text-fog">
          {navLinks.map((link) => (
            <NavButton key={link.to} to={link.to} label={link.label} />
          ))}
        </div>

        <NavButton
          to="/book-a-mentor"
          label="Book a mentor"
          onClick={() => setOpen(false)}
          className="bg-laurel text-cream px-6 py-2 rounded-full hover:bg-basil"
          disableHover
        />

        {renderStaffControls()}
      </div>

      {/* Mobile menu toggle */}
      <button
        className="2xl:hidden p-2 rounded-md focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8 text-laurel"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-cream flex flex-col items-center space-y-4 p-6 shadow-sm 2xl:hidden z-50 text-fog">
          {navLinks.map((link) => (
            <NavButton
              key={link.to}
              to={link.to}
              label={link.label}
              onClick={() => setOpen(false)}
            />
          ))}

          <NavButton
            to="/book-a-mentor"
            label="Book a mentor"
            onClick={() => setOpen(false)}
            className="bg-laurel text-cream px-6 py-2 rounded-full hover:bg-basil"
            disableHover
          />

          {renderStaffControls()}
        </div>
      )}
    </nav>
  );
}
