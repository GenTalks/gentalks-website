import { useState } from 'react';
import HomeButton from './HomeButton';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import ContactButton from './ContactButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 lg:px-12 py-4 bg-cream shadow-deep">

      <div className="shrink-0">
        <HomeButton onClick={() => setOpen(false)} />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:flex-1 lg:ml-6">
        <Link to="/" onClick={() => setOpen(false)}>
        <h1 className="font-teachers text-[30px] sm:text-[34px] lg:text-[36px] text-laurel tracking-widest text-center translate-x-4 lg:text-left cursor-pointer">
            GENTALKS
        </h1>
        </Link>
      </div>

      <div className="hidden lg:flex gap-1">
        <NavButton to="/ourstory" label="Our Story" />
        <NavButton to="/community" label="Community" />
        <NavButton to="/content" label="Content" />
        <NavButton to="/resources" label="Resources" />
        <NavButton to="/faqs" label="FAQs" />
        <ContactButton to="/contact" label ="Contact" />
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
          <NavButton to="/ourstory" label="Our Story" onClick={() => setOpen(false)} />
          <NavButton to="/community" label="Community" onClick={() => setOpen(false)} />
          <NavButton to="/content" label="Content" onClick={() => setOpen(false)} />
          <NavButton to="/resources" label="Resources" onClick={() => setOpen(false)} />
          <NavButton to="/faqs" label="FAQs" onClick={() => setOpen(false)} />
          <ContactButton to="/contact" label="Contact" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}
