import { Link } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavButton = ({ to, label, onClick }: NavButtonProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <button className="bg-sage text-cream px-5 py-3 rounded-[20px] hover:bg-laurel drop-shadow-evergreen">
        {label}
      </button>
    </Link>
  );
};

export default NavButton;
