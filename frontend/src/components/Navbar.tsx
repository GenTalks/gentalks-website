import HomeButton from './HomeButton';
import NavButton from './NavButton';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-cream shadow-md">
      <HomeButton />
      <div className="flex space-x-8">
        <NavButton to="/about" label="About" />
        <NavButton to="/team" label="Team" />
        <NavButton to="/community" label="Community" />
        <NavButton to="/contact" label="Contact" />
        <NavButton to="/shop" label="Shop" />
      </div>
    </nav>
  );
}
