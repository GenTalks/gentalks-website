import { Link } from 'react-router-dom'

const NavButton = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link to={to}>
        <button className="bg-sage text-cream px-4 py-2 rounded hover:bg-laurel">
            {label}
        </button>
    </Link>
  );
};

export default NavButton;
