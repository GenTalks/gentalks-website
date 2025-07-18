import { useState } from 'react';
import HomeButton from './HomeButton';
import NavButton from './NavButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-4 bg-cream shadow-deep relative">
      
      <HomeButton />

      <h1 className="font-teachers text-[50px] flex-1 text-center text-laurel tracking-widest">
        GENTALKS
      </h1>

      <div className="hidden lg:flex flex-wrap gap-6 max-w-full">
        <NavButton to="/about" label="About" />
        <NavButton to="/community" label="Community" />
        <NavButton to="/team" label="Team" />
        <NavButton to="/mentors" label="Mentors" />
        <NavButton to="/contact" label="Contact" />
      </div>

      <button
        className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-laurel"
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
            d={
              open
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16M4 18h16'
            }
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-cream flex flex-col space-y-4 p-6 shadow-md lg:hidden z-10">
          <NavButton to="/about" label="About" />
          <NavButton to="/community" label="Community" />
          <NavButton to="/team" label="Team" />
          <NavButton to="/mentors" label="Mentors" />
          <NavButton to="/contact" label="Contact" />
        </div>
      )}
    </nav>
  );
}
