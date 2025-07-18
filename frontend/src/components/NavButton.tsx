import { Link } from 'react-router-dom'

const NavButton = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link to={to}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {label}
        </button>
    </Link>
  );
};

export default NavButton;
