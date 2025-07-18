import { useState } from 'react';
import HomeButton from './HomeButton';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 lg:px-12 py-4 bg-cream shadow-deep">

      <div className="shrink-0">
        <HomeButton onClick={() => setOpen(false)} />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:flex-1 lg:ml-6">
        <Link to="/" onClick={() => setOpen(false)}>
        <h1 className="font-teachers text-[32px] sm:text-[40px] lg:text-[50px] text-laurel tracking-widest text-center translate-x-5 lg:text-left cursor-pointer">
            GENTALKS
        </h1>
        </Link>
      </div>

      <div className="hidden lg:flex gap-6">
        <NavButton to="/about" label="About" />
        <NavButton to="/community" label="Community" />
        <NavButton to="/media" label="Media" />
        <NavButton to="/mentors" label="Mentors" />
        <NavButton to="/teams" label="Teams" />
      </div>

      <button
        className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-laurel"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8 text-laurel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-cream flex flex-col space-y-4 p-6 shadow-md lg:hidden z-50">
          <NavButton to="/about" label="About" onClick={() => setOpen(false)} />
          <NavButton to="/community" label="Community" onClick={() => setOpen(false)} />
          <NavButton to="/media" label="Media" onClick={() => setOpen(false)} />
          <NavButton to="/mentors" label="Mentors" onClick={() => setOpen(false)} />
          <NavButton to="/teams" label="Teams" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}
