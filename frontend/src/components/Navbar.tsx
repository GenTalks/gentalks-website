import { useState } from "react";
import HomeButton from "./HomeButton";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 relative flex items-center justify-between px-6 2xl:px-12 py-4 bg-cream shadow-deep tracking-wide">
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

      <div className="text-lg hidden 2xl:flex gap-4 items-center flex-shrink-0">
        <div className="text-fog ">
          <NavButton to="/community" label="Community" />
          <NavButton to="/about" label="About" />
          <NavButton to="/playground" label="Playground" />
          <NavButton to="/blogs" label="Blogs" />
          <NavButton to="/resources" label="Resources" />
          <NavButton to="/faqs" label="FAQs" />
        </div>

        <div>
          <NavButton
            to="/book-a-mentor"
            label="Book a mentor"
            onClick={() => setOpen(false)}
            className="bg-laurel text-cream px-6 py-2 rounded-full hover:bg-basil"
            disableHover
          />
        </div>
      </div>

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

      {open && (
        <div className="absolute top-full left-0 right-0 bg-cream flex flex-col items-center space-y-4 p-6 shadow-md 2xl:hidden z-50 text-fog">
          <NavButton
            to="/community"
            label="Community"
            onClick={() => setOpen(false)}
          />

          <NavButton
            to="/about"
            label="About"
            onClick={() => setOpen(false)}
          />

          <NavButton
            to="/playground"
            label="Playground"
            onClick={() => setOpen(false)}
          />

          <NavButton
            to="/blogs"
            label="Blogs"
            onClick={() => setOpen(false)}
          />

          <NavButton
            to="/resources"
            label="Resources"
            onClick={() => setOpen(false)}
          />
          <NavButton to="/faqs" label="FAQs" onClick={() => setOpen(false)} />

          <NavButton
            to="/book-a-mentor"
            label="Book a mentor"
            onClick={() => setOpen(false)}
            className="bg-laurel text-cream px-6 py-2 rounded-full hover:bg-basil"
            disableHover
          />
        </div>
      )}
    </nav>
  );
}
