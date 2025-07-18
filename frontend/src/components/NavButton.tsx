import { Link } from 'react-router-dom'

const NavButton = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link to={to}>
        <button className="bg-sage text-cream px-5 py-3 rounded-[20px] hover:bg-laurel drop-shadow-evergreen">
            {label}
        </button>
    </Link>
  );
};

export default NavButton;
