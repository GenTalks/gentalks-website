import HomeButton from './HomeButton';
import NavButton from './NavButton';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-cream shadow-deep">
      <HomeButton />
        
        <h1 className="font-teachers text-[50px] text-center flex-1 text-laurel tracking-widest">GENTALKS</h1>
      
      <div className="flex space-x-8">
        <NavButton to="/about" label="About" />
        <NavButton to="/community" label="Community" />
        <NavButton to="/team" label="Team" />
        <NavButton to="/mentors" label="Mentors" />
        <NavButton to="/contact" label="Contact" />
      </div>
    </nav>
  );
}
